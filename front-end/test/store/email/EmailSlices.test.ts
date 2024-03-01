import { 
    emailSlice, 
    setEmailsUser, 
    setGetEmailsUser, 
    setResetEmailSlice, 
    setSelectEmail, 
    setSendNewMessage 
} from '../../../src/store/slices/email/EmailSlice';

import { Received } from '../../../src/types/types';

import { 
    demoEmailReceived, 
    demoEmailSent, 
    demoEmailsUser, 
    demoEmailsUsers, 
    initialStateEmailSlice, 
    initialStateEmailSliceComplete, 
    initialStateEmailsUser 
} from '../../fixtures/emailFixtures';

describe('Test to [EmailSlices.ts]', () => {  

    test('Should return the initial default values', () => {  

        expect( emailSlice.name ).toBe( 'email' );
        expect( emailSlice.getInitialState() ).toEqual( initialStateEmailSlice );

    });

    test('Should organize the list user emails into emailReceived and emailSent', () => {  

        const state = emailSlice.reducer( initialStateEmailSlice, setEmailsUser( demoEmailsUser ) );
        expect( state ).toEqual( initialStateEmailsUser );
        expect( state.emailsReceived.length ).toBe( 1 );
        expect( state.emailSent.length ).toBe( 2 );

    });

    test('Should add data email in selectedEmail when user selects a email', () => { 

        const state = emailSlice.reducer( initialStateEmailSlice, setSelectEmail( demoEmailReceived[0] ) );
        expect( state.selectedEmail ).toEqual( demoEmailReceived[0] );

    });

    test('Should add the list of data user in attribute emailsUsers', () => {  

        const state = emailSlice.reducer( initialStateEmailSlice, setGetEmailsUser( demoEmailsUsers ) );
        expect( state.emailsUsers ).toEqual([
            { value: 2, label: 'camila@gmail.com' },
            { value: 1, label: 'carlos@gmail.com' }
          ]);
        expect( state.emailsUsers.length ).toBe( 2 );

    });

    test('Should add a new send email to the list emailSent', () => {
        
        const newMessageSent: Received = {
            email: {
                body: 'Contenido de prueba No.100',
                createdAt: new Date(),
                emailId: 3,
                subject: 'Instalación contenido No.100',
            },
            user: {
                firstName: 'Jonathan',
                lastName: 'Incapie',
                userId: 3,
                userName: 'jonathan@gmail.com'
            }
        }

        const state = emailSlice.reducer( initialStateEmailsUser, setSendNewMessage( newMessageSent ) );
        expect( state.emailSent.length ).toBe( 3 );
        expect( state.emailSent ).toEqual( [...demoEmailSent, newMessageSent] );
        expect( state.emailSent[2] ).toEqual( newMessageSent );

    });

    test('Should reset all attributes to their initial state', () => { 

        const state = emailSlice.reducer( initialStateEmailSliceComplete, setResetEmailSlice() );
        expect( state ).toEqual( initialStateEmailSlice );

    });

});