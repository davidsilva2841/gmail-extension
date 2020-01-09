import React from 'react';
import { connect } from 'react-redux';

import {
    getEmails
} from "../actions";

import EmailRow from "./emailRow";

let emails = [
    {
        "id": "16f8ae1219647911",
        "snippet": "From: emily.hilliard@galvanize.com Sent: Thursday, January 9, 2020 9:16:42 AM (UTC-06:00) Central Time (US &amp; Canada) To: slawson355@gmail.com; jcdiaz1201@gmail.com; davidsilva525@outlook.com;",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva2841+hackreactor@gmail.com"
            },
            {
                "name": "From",
                "value": "\"emily.hilliard@galvanize.com\" <emily.hilliard@galvanize.com>"
            }
        ]
    },
    {
        "id": "16f8ae0d146a8f38",
        "snippet": "From: emily.hilliard@galvanize.com Sent: Thursday, January 9, 2020 9:16:18 AM (UTC-06:00) Central Time (US &amp; Canada) To: slawson355@gmail.com; jcdiaz1201@gmail.com; davidsilva525@outlook.com;",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva2841+hackreactor@gmail.com"
            },
            {
                "name": "From",
                "value": "\"emily.hilliard@galvanize.com\" <emily.hilliard@galvanize.com>"
            }
        ]
    },
    {
        "id": "16f8a75fb4d6dadf",
        "snippet": "Bank Wire Disbursement Successful Fidelity Investments. Quick Links: Alerts Center Alerts Delivery Preferences Temporarily Stop Alerts Contact Us Legal Information Thu Jan 09, 2020 08:19:42 AM EST Bank",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva28.4.1@gmail.com"
            },
            {
                "name": "From",
                "value": "Fidelity Investments <Fidelity.Alerts@fidelity.com>"
            }
        ]
    },
    {
        "id": "16f8a726eb39a842",
        "snippet": "Bank Wire Disbursement In Process Fidelity Investments. Quick Links: Alerts Center Alerts Delivery Preferences Temporarily Stop Alerts Contact Us Legal Information Thu Jan 09, 2020 08:15:50 AM EST Bank",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva28.4.1@gmail.com"
            },
            {
                "name": "From",
                "value": "Fidelity Investments <Fidelity.Alerts@fidelity.com>"
            }
        ]
    },
    {
        "id": "16f89d264bad00d4",
        "snippet": "Congratulations! Hi , We have finished processing your order. Downloads Product Expires Download [Order #103957] (January 2, 2020) Product Quantity Price Material Design for Bootstrap 4 Pro (jQuery",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva2841+receipts@gmail.com"
            },
            {
                "name": "From",
                "value": "MDBootstrap <no-reply@mdbootstrap.com>"
            }
        ]
    },
    {
        "id": "16f89c8eabe0bd1d",
        "snippet": "Congratulations! Hi , We have finished processing your order. Downloads Product Expires Download Material Design for Bootstrap Pro (React version) - 1 person &amp; unlimited projects MDB-React-Pro-",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva2841+receipts@gmail.com"
            },
            {
                "name": "From",
                "value": "MDBootstrap <no-reply@mdbootstrap.com>"
            }
        ]
    },
    {
        "id": "16f88429f15c52ca",
        "snippet": "‌ ‌ ‌ NEW ARRIVALS LINGERIE SWIMWEAR DANCEWEAR Hi David. Thank you for your order! We truly appreciate your business. As a thank you for your first order, enjoy 10% off your next purchase at Julbie.com",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva2841+paypal@gmail.com"
            },
            {
                "name": "From",
                "value": "\"Julbie.com\" <admin@julbie.com>"
            }
        ]
    },
    {
        "id": "16f880b1cefaf289",
        "snippet": "Fidelity Alert: Online Account Transfer Initiated Fidelity Investments Subscription Alert Wed Jan 08, 2020 09:03:46 pm ET Online Account Transfer Initiated For account ending in 1999: A transfer from",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva28.4.1@gmail.com"
            },
            {
                "name": "From",
                "value": "Fidelity Investments <Fidelity.Alerts@fidelity.com>"
            }
        ]
    },
    {
        "id": "16f87ae99ae99428",
        "snippet": "Join Your First Contest! Saturday, January 11 ﻿﻿Don&#39;t think you&#39;re ready for interviews yet? Contests are the best way to gauge how well-prepared you are and to simulate the environment of a",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva2841+github@gmail.com"
            },
            {
                "name": "From",
                "value": "LeetCode <no-reply@leetcode.com>"
            }
        ]
    },
    {
        "id": "16f877be0b3ee829",
        "snippet": "Now that you&#39;ve upgraded, keep building. Go to your Console Thanks for upgrading. We created Google Cloud Platform to bring applications like YouTube, Gmail, and Maps to life. Now it&#39;s your",
        "headers": [
            {
                "name": "Delivered-To",
                "value": "davidsilva2841@gmail.com"
            },
            {
                "name": "From",
                "value": "Google Cloud Platform <CloudPlatform-noreply@google.com>"
            }
        ]
    }
];

const Dashboard = props => {
    console.log(props);
    return (
        <div id="dashboard">
            <h2>Dashboard</h2>
            <span>
            
                <button
                    className="btn btn-primary m-2"
                    onClick={ () => props.getEmails() }
                >
                    Get emails
                </button>
            </span>
            {props.gmail.mail.map((email, ix) => <EmailRow email={email} key={ix}/>)}
            {/*{emails.map((email, ix) => <EmailRow email={email} key={ix}/>)}*/}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        gmail: state.gmail
    }
};

export default connect(
    mapStateToProps,
    {
        getEmails
    })
(Dashboard);

