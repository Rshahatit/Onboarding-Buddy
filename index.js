exports.handler = (event, context, callback) => {
    console.log(event);
    let acrDict = {'SNS' : 'Amazon Simple Notification Service','SQS' : 'Amazon Simple Queue Service','S3' : 'Amazon Simple Storage Service','RDS' : 'Amazon Relational Database Service','ECS' : 'Amazon EC2 Container Service','EC2' : 'Amazon Elastic Compute Cloud','imgix' : 'real time image processing','uuid' : 'Universally Unique Identifier','e2e' : 'End to End','QA' : 'Quality Assurance','UAT' : 'User Acceptance Testing','RFC-F' : 'Request for Comments - Functional','RFC-T' : 'Request for Comments - Technical','Visops' : 'visual intelligent services operations','PCBA' : 'Printed Circuit Board Assembly','KPI' : 'Key Performance Indicator','SDK' : 'Software Development Kit','AECOM' : 'Architecture, Engineering, Consulting,Operations, and Maintenance','MOU' : 'memorandum of understanding','DJI' : 'Da-Jiang Innovations','NTT' : 'Nippon Telegraph and Telephone','WFH' : 'Work From Home','PTO' : 'Paid Time Off','VCP' : 'Virtual Private Cloud','PaaS' : 'Platform as a Service','SaaS' : 'Software as a Service','IaaS' : 'Infrastructure as a Service','SOA' : 'Service Oriented Architecture','HPP' : 'High Precision Package','DSP' : 'Drone Service Provider', 'RTK' : 'Real Time Kinematics'};
    let slots = event.currentIntent.slots;
    let acr = slots.slotOne;
     console.log(acr);
     console.log(acrDict);
     console.log(acrDict[String(acr)]);
    if (acrDict[String(acr)]) {
        let res = {
            "dialogAction": {
                            "type": "Close",
                            "fulfillmentState": "Fulfilled",
                            "message": {
                                        "contentType": "PlainText",
                                        "content":acrDict[String(acr)]
                                        }
                            }
        }
        callback(null, res);
    } else {
        throw new Error('Acronym with name ' + acr + ' not known');
    }  
};