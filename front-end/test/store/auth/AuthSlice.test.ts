import { authSlice, onChecking, onLogin, onLogout } from '../../../src/store/slices/auth/AuthSlice';
import { demoUser, initialStateAuth, stateAuthenticated, stateNoAuthenticated, stateNoAuthenticatedWithError } from '../../fixtures/AuthFixtures';

describe('Test to [AuthSlice.ts]', () => {  

    test('Should return the initial default values', () => { 

        expect( authSlice.name ).toBe('auth');
        expect( authSlice.getInitialState() ).toEqual( initialStateAuth );

    });

    test('Should return user authenticated with onLogin()', () => {  

        const state = authSlice.reducer( initialStateAuth, onLogin( demoUser ) );
        expect( state ).toEqual( stateAuthenticated );

    });

    test('Should return user no-authenticated with onLogout()', () => {  

        const state = authSlice.reducer( stateAuthenticated, onLogout( undefined ) );
        expect( state ).toEqual( stateNoAuthenticated );

    });

    test('Should return user no-authenticated when login generates a credentials error', () => {  

        const state = authSlice.reducer( initialStateAuth, onLogout('credentials error') );
        expect( state ).toEqual( stateNoAuthenticatedWithError );

    });

    test('Should return status checking', () => {  

        const state = authSlice.reducer( stateNoAuthenticatedWithError, onChecking() );
        expect( state.status ).toBe('checking');

    });

});