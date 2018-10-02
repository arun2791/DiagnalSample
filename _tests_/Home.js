import React from 'react';
import Home from '../app/screens/Login/LoginView';
import renderer from 'react-test-renderer';
import contentLists from '../app/fixtures/contentListingPage1';
import * as API from '../app/api';

test('renders correctly', () => {
    const tree = renderer.create(<Home/>).toJSON();
    expect(tree).toMatchSnapshot();
});

//test api using mock data
test('Should load contents',() => {
    global.fetch = jest.fn(() => new Promise((resolve) => {
        resolve( { status: 201, json: () => (contentLists) });
    }));
 
    return Api.getContentsLists(1).then((data1)=>{
        expect(data1).toBeDefined();
        expect(data1.page).toBeDefined();
        expect(data1.page.title).toBeDefined();
    });
 
 });
 
 