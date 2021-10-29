'use strict';

const events = require('../utils/event-pool.js');
const faker = require('faker');
require('../modules/vendor.js');
require('../modules/driver.js');

let consoleSpy;
let testDelivery;

// Tests

beforeEach(() => {
    let testDelivery = {
        store: `${faker.company.catchPhraseDescriptor()} ${faker.company.catchPhraseNoun()}`,
        orderID: faker.datatype.uuid(),
        customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: `${faker.address.streetAddress()}`
    }
})

afterEach(() => {
    consoleSpy.mockRestore();
})


// Vendor

describe('vendor tests', () => {

    // Can send out pickup notice
    it('can send a console log when pickup is ready', () => {
        events.emit('pickup', testDelivery);
        // it's already seeding it. how do it know what the orderID is?
        expect(consoleSpy).toEqual(testDelivery.orderID);
    })

    // Can see In-Transit
    // do I really need this one?
    xit('can view a in-transit console log', () => {
        
    })
    
    // Can see Delivered notice
    // Same with this one?
})


// Driver
describe('driver tests', () => {

    // Can see pickup notice from vendor
    // Do I need this one?

    // Can send out In-transit notice
    it('can send a console log when inTransit', () => {
        events.emit('inTransit', testDelivery);
        expect(consoleSpy).toEqual(testDelivery.orderID);
    })
    
    // Can send out Delivered notice
    it('can send a console log when delivered', () => {
        events.emit('delivered', testDelivery);
        expect(consoleSpy).toEqual(testDelivery.orderID);
    })
})


// Company

// Can see Pickup notice

// Can see In-Transit notice

// Can see Delivered notice