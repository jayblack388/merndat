import gql from 'graphql-tag';

export const ADD_USER = gql`
	mutation addUser($email: String!, $password: String!) {
		addUser(email: $email, password: $password) {
			token
			user {
				_id
				dateCreated
				email
				name {
          name
        }
				picture
			}
		}
	}
`;

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				dateCreated
				email
				name {
          name
        }
				picture
			}
		}
	}
`;
