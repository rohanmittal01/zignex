import { openDB, DBSchema } from 'idb';

export interface RouteUser extends DBSchema {
    id: any,
    City: any,
    'Container Count': any,
    'Census Block ID': any,
    'Container No': any,
    'Container Note 1': any
    'Container Size': any
    'County': any
    'Customer Name': any
    'Customer Number': any
    'Day Of Week': any
    'Enclosed Container Flag': any
    'House #': any
    'Latitude': any
    'Mas Uniq Id': any
    'On Property Travel Time': any
    'Route No': any
    'Seq No': any
    'Service Code': any
    'Service Occurence': any
    'Service Occurence(s)': any
    'Service Time': any
    'Source Day Of Week': any
    'Source Seq No': any
    'Start Time': any
    'State': any
    'Stop Time': any
    'Street Name': any
    'Zip': any

}

// By defining the interface of table records,
// you get better type safety and code completion
export interface IContact {
    id?: number; // Primary key. Optional (autoincremented)
    first: string; // First name
    last: string; // Last name
}

export interface IEmailAddress {
    id?: number;
    contactId: number; // "Foreign key" to an IContact
    type: string; // Type of email such as "work", "home" etc...
    email: string; // The email address
}

export interface IPhoneNumber {
    id?: number;
    contactId: number;
    type: string;
    phone: string;
}