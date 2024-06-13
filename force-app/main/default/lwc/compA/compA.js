import { LightningElement, wire } from 'lwc';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from 'lightning/messageService';
import sampleMessageChannel from '@salesforce/messageChannel/sampleMessageChannel__c';

export default class CompA extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleChange(event){
        let input = event.target.value;
        // Call message service publish method
        publish(this.messageContext, sampleMessageChannel, {userInput: input});
    }

}