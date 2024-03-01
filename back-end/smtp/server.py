import os
import asyncio
import logging

from mailbox import Maildir
from operator import itemgetter
from aiosmtpd.controller import Controller
from aiosmtpd.handlers import Sink, Mailbox
from contextlib import ExitStack
from tempfile import TemporaryDirectory


class SMTPServer:
    """
    A simple SMTP server implementation utilizing aiosmtpd
    package for a more performant I/O using concurrency.

    Attributes:
        None

    Methods:
        handle_RCPT: Handles the RCPT command during SMTP communication.
        handle_DATA: Handles the DATA command during SMTP communication.
        get_mailbox: Retrieves emails from a specified maildir.

    """

    async def handle_RCPT(self, server, session, envelope, address, rcpt_options):
        """
        Handles the RCPT command during SMTP communication.

        Args:
            server: The SMTP server instance.
            session: The SMTP session instance.
            envelope: The envelope containing email data.
            address (str): The recipient email address.
            rcpt_options: Options for the recipient.

        Returns:
            str: Response indicating success or failure of RCPT command.

        """
        if not address.endswith("@example.com"):
            return "550 not relaying to that domain"
        envelope.rcpt_tos.append(address)
        return "250 OK"

    async def handle_DATA(self, server, session, envelope):
        """
        Handles the DATA command during SMTP communication.

        Args:
            server: The SMTP server instance.
            session: The SMTP session instance.
            envelope: The envelope containing email data.

        Returns:
            str: Response indicating success or failure of DATA command.

        """
        print("Message from %s" % envelope.mail_from)
        print("Message for %s" % envelope.rcpt_tos)
        print("Message data:\n")
        for ln in envelope.content.decode("utf8", errors="replace").splitlines():
            print(f"> {ln}".strip())
        print()
        print("End of message")
        return "250 Message accepted for delivery"

    async def get_mailbox(self, maildir):
        """
        Retrieves emails from a specified maildir.

        Args:
            maildir (str): Path to the maildir directory.

        Returns:
            None

        """
        mailbox = Maildir(maildir)
        messages = sorted(mailbox, key=itemgetter("message-id"))
        for message in messages:
            print(message["Message-ID"], message["From"], message["To"])


async def amain(loop):
    """
    Main coroutine function to start the SMTP server.

    Args:
        loop: The asyncio event loop.

    Returns:
        None

    """
    resources = ExitStack()
    tempdir = resources.enter_context(TemporaryDirectory())
    maildir_path = os.path.join(tempdir, "maildir")
    controller = Controller([Sink(), Mailbox(maildir_path)], hostname="", port=8025)
    controller.start()


if __name__ == "__main__":
    logging.basicConfig(level=logging.DEBUG)
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.create_task(amain(loop=loop))  # type: ignore[unused-awaitable]
    try:
        loop.run_forever()
    except KeyboardInterrupt:
        print("User abort indicated")
