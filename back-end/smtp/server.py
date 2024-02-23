import asyncio
import logging
from mailbox import Maildir
from operator import itemgetter

from aiosmtpd.controller import Controller
from aiosmtpd.controller import Controller
from aiosmtpd.handlers import Sink

import os
from contextlib import ExitStack
from tempfile import TemporaryDirectory
from aiosmtpd.handlers import Mailbox


class SMTPServer:
    async def handle_RCPT(self, server, session, envelope, address, rcpt_options):
        if not address.endswith('@example.com'):
            return '550 not relaying to that domain'
        envelope.rcpt_tos.append(address)
        return '250 OK'

    async def handle_DATA(self, server, session, envelope):
        print('Message from %s' % envelope.mail_from)
        print('Message for %s' % envelope.rcpt_tos)
        print('Message data:\n')
        for ln in envelope.content.decode('utf8', errors='replace').splitlines():
            print(f'> {ln}'.strip())
        print()
        print('End of message')
        return '250 Message accepted for delivery'

        # Logic to save the email in the db(TODO)

    async def get_mailbox(self, maildir): 
        mailbox = Maildir(maildir)
        messages = sorted(mailbox, key=itemgetter('message-id'))
        for message in messages:
            print(message['Message-ID'], message['From'], message['To'])

async def amain(loop):
    resources = ExitStack()
    tempdir = resources.enter_context(TemporaryDirectory())
    maildir_path = os.path.join(tempdir, 'maildir')
    controller = Controller([Sink(), Mailbox(maildir_path)], hostname='', port=8025)
    controller.start()

if __name__ == '__main__':
    logging.basicConfig(level=logging.DEBUG)
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    loop.create_task(amain(loop=loop))  # type: ignore[unused-awaitable]
    try:
        loop.run_forever()
    except KeyboardInterrupt:
        print("User abort indicated")
