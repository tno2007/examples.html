var pointsCalculator = new Vue({
  el: "#pointsCalculator",
  data: {
    // rather start with null
    VisaQuiz: null,
    w: "100%",
    visas: [
      {
        id: "BIIOption",
        val: 188,
        heading:
          "Business Innovation and Investment (Provisional) visa (subclass 188)",
      },
      {
        id: "SIOption",
        val: 189,
        heading: "Skilled Independent visa (subclass 189)",
      },
      {
        id: "SNOption",
        val: 190,
        heading: "Skilled Nominated visa (subclass 190)",
      },
      {
        id: "SROption",
        val: 489,
        heading: "Skilled Regional (Provisional) visa (subclass 489)",
      },
      {
        id: "SWROption",
        val: 491,
        heading: "Skilled Work Regional (Provisional) visa (subclass 491)",
      },
    ],
    // BII 188
    BIIVisas: [
      {
        checked: true,
        /*
            Here you are storing a string value...            
            vmodel: "BIIQuiz_1"

            But you are also using this as a v-model, which will end up being a number.
            Try not to make a variable store a mix of a 'string' and 'number'.
            It should have one type, in this case, 'number'

            Initialize it to either zero or null.
            vmodel: 0,
            vmodel: null

            null is better, because you can assess whether the question has been answered.        


         */
        model: null,
        heading: "Age",
        subheading: "Which age band do you fit into?",
        options: [
          { name: "Under 18 years", value: 0 },
          { name: "18 to 24 years", value: 20 },
          { name: "25 to 32 years", value: 30 },
          { name: "33 to 39 years", value: 25 },
          { name: "40 to 44 years", value: 20 },
          { name: "45 to 54 years", value: 15 },
          { name: "55 and older", value: 0 },
        ],
      },
      {
        checked: false,
        model: null,
        heading: "English language requirements",
        content:
          "<p>Read about:</p> <ul><li><a href='#'>Vocational English</a></li><li><a href='#'>Proficient English</a></li></ul>",
        subheading: "How would you rate your English ability?",
        options: [
          { name: "Vocational English", value: 5 },
          { name: "Proficient English", value: 10 },
          { name: "Not applicable", value: 0 },
        ],
      },
      {
        checked: false,
        id: 3,
        model: null,
        heading: "Educational qualifications",
        subheading: "What is your highest qualification?",
        options: [
          {
            name: "Trade certificate, diploma or bachelor degree by an Australian education institute; or a bachelor qualification recognised by an educational institution of a recognised standard",
            value: 5,
          },
          {
            name: "A Bachelor degree in business, science or technology by an Australian institution; or a bachelor qualification in business, science or technology by an educational institution of a recognised standard",
            value: 5,
          },
          { name: "Not applicable", value: 0 },
        ],
      },
      {
        checked: false,
        model: null,
        heading: "Special endorsement",
        subheading:
          "The nominating State or Territory government agency has determined that your proposed business is of unique and important benefit to the State or Territory where the nominating government agency is located",
        options: [
          { name: "Yes", value: 10 },
          { name: "No", value: 10 },
        ],
      },
      {
        checked: false,
        model: null,
        heading: "Financial assets",
        subheading:
          "Net business and personal assets of you, your partner or you and your partner combined in each of the preceding 2 fiscal years of at least:",
        options: [
          { name: "Not less than AUD800,000", value: 5 },
          { name: "Not less than AUD1.3 million", value: 15 },
          { name: "Not less than AUD1.8 million", value: 25 },
          { name: "Not less than AUD2.25 million", value: 35 },
          { name: "Not applicable", value: 0 },
        ],
      },
      {
        checked: false,
        model: null,
        heading: "Business turnover",
        subheading:
          "You had an ownership interest in one or more main businesses that had an annual turnover in at least 2 of the 4 fiscal years immediately before the time of invitation to apply for the visa:",
        options: [
          { name: "Not less than AUD500,000", value: 5 },
          { name: "Not less than AUD1 million", value: 15 },
          { name: "Not less than AUD1.5 million", value: 25 },
          { name: "Not less than AUD2 million", value: 35 },
          { name: "Not applicable", value: 0 },
        ],
      },
      {
        checked: false,
        model: null,
        heading: "Business Innovation stream only - Business experience",
        subheading:
          "You have held one or more main businesses before you were invited to apply for the visa for:",
        options: [
          {
            name: "Not less than 4 years within the preceding 5 years",
            value: 10,
          },
          {
            name: "Not less than 7 years within the preceding 8 years",
            value: 15,
          },
          { name: "Not applicable", value: 0 },
        ],
      },
      {
        checked: false,
        model: null,
        heading: "Investor stream only - Investor experience",
        subheading:
          "Immediately before the time of application you held eligible investments of at least AUD100,000 held for:",
        options: [
          {
            name: "Not less than 4 years before the time of invitation to apply for the visa",
            value: 10,
          },
          {
            name: "Not less than 7 years before the time of invitation to apply for the visa",
            value: 15,
          },
          { name: "Not applicable", value: 0 },
        ],
      },
      {
        checked: false,
        model: null,
        heading: "Business innovation qualifications",
        subheading: "Select your business qualifications:",
        options: [
          {
            name: "Patents or designs registered not less than 1 year before that time and used in the day to day activities of the main business",
            value: 15,
          },
          {
            name: "Trademarks registered not less than 1 year before that time and used in the day to day activities of the main business",
            value: 10,
          },
          {
            name: "An ownership in and day to day participation in the management of one or more main business operated under a formal joint venture agreement/s entered into no less than 1 year before the time",
            value: 5,
          },
          {
            name: "An ownership interest in a main business/s that derives no less than 50% of its annual turnover from export trade",
            value: 15,
          },
          {
            name: "An ownership interest in a main buisness/s not more that 5 years before had an average annualised growth in turnover that was greater than 20% per annum over 3 continuous fiscal years and in at least one of the 3 fiscal years employed 10 or more employees for a total number of hours that was at least the total number of hours that would have been worked by 10 full-time employees",
            value: 10,
          },
          {
            name: "An ownership interest in a main business/s that received a grant from a government body in your home country of at least AUD10,000 for the purposes of early phase start up of a business, product commercialisation, business development or business expansion",
            value: 10,
          },
          {
            name: "An ownership interest in a main business/s that received venture capital funding of at least AUD100,000 not more than 4 years before the time of the invitation for the purposes of early phase start up of a business, product commercialisation, business development or business expansion",
            value: 10,
          },
        ],
      },
    ],

    BIIResults: false,
    // SI 189
    SIVisas: [
      {
        checked: true,
        vmodel: "SIQuiz_1",
        heading: "Age",
        subheading: "Which age band do you fit into?",
        options: [
          { name: "at least 18 but less than 25 years", value: 25 },
          { name: "at least 25 but less than 33 years", value: 30 },
          { name: "at least 33 but less than 40 years", value: 25 },
          { name: "at least 40 but less than 45 years", value: 15 },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_2",
        heading: "English language requirements",
        content: "<p>Read the English language skills requirements.</p>",
        subheading: "How would you rate your English ability?",
        options: [
          { name: "Competent English", value: 5 },
          { name: "Proficient English", value: 10 },
          { name: "Superior English", value: 20 },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_3",
        heading: "Skilled employment experience",
        subheading: "Overseas skilled employment - (outside Australia):",
        options: [
          { name: "Less than 3 years", value: 0 },
          { name: "At least 3 but less than 5 years", value: 5 },
          { name: "At least 5 but less than 8 years", value: 10 },
          { name: "At least 8 years", value: 15 },
        ],
        //subheading2: "Australian skilled employment – (in Australia):",
        // options2: [
        //   { name: "Less than 1 year", value: 0 },
        //   { name: "At least 1 but less than 3 years", value: 5 },
        //   { name: "At least 3 but less than 5 years", value: 10 },
        //   { name: "At least 5 but less than 8 years", value: 15 },
        //   { name: "At least 8 years", value: 20 },
        // ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_4",
        heading: "Educational qualifications",
        subheading: "What is your highest educational qualification?",
        options: [
          {
            name: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard.",
            value: 20,
          },
          {
            name: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard.",
            value: 15,
          },
          {
            name: "A diploma or trade qualification from an Australian educational institution.",
            value: 10,
          },
          {
            name: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation",
            value: 10,
          },
          { name: "Not Applicable", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_5",
        heading: "Australian study requirement",
        content: "<p>To claim this read Australian study requirement</p>",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_6",
        heading: "Specialist education qualification",
        subheading:
          "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?",
        options: [
          { name: "Yes", value: 10 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_7",
        heading: "Credentialled community language",
        subheading:
          "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_8",
        heading: "Study in regional Australia",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_9",
        heading: "Partner skills",
        subheading: "Select the relevant partner skills qualifications:",
        options: [
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria",
            value: 10,
          },
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
            value: 5,
          },
          {
            name: "You are single or your partner is an Australian citizen or permanent resident",
            value: 10,
          },
        ],
      },
      {
        checked: false,
        vmodel: "SIQuiz_10",
        heading: "Professional year in Australia",
        subheading: "Did you complete a professional year in Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
    ],
    SIResults: false,

    // SN 190
    SNVisas: [
      {
        checked: true,
        vmodel: "SNQuiz_1",
        heading: "Age",
        subheading: "Which age band do you fit into?",
        options: [
          { name: "at least 18 but less than 25 years", value: 25 },
          { name: "at least 25 but less than 33 years", value: 30 },
          { name: "at least 33 but less than 40 years", value: 25 },
          { name: "at least 40 but less than 45 years", value: 15 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_2",
        heading: "English language requirements",
        content: "<p>Read the English language skills requirements.</p>",
        subheading: "How would you rate your English ability?",
        options: [
          { name: "Competent English", value: 5 },
          { name: "Proficient English", value: 10 },
          { name: "Superior English", value: 20 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_3",
        heading: "Skilled employment experience",
        subheading: "Overseas skilled employment – (outside Australia):",
        options: [
          { name: "Less than 3 years", value: 0 },
          { name: "At least 3 but less than 5 years", value: 5 },
          { name: "At least 5 but less than 8 years", value: 10 },
          { name: "At least 8 years", value: 15 },
        ],
        //subheading2: "Australian skilled employment – (in Australia):",
        // options2: [
        //   { name: "Less than 1 year", value: 0 },
        //   { name: "At least 1 but less than 3 years", value: 5 },
        //   { name: "At least 3 but less than 5 years", value: 10 },
        //   { name: "At least 5 but less than 8 years", value: 15 },
        //   { name: "At least 8 years", value: 20 },
        // ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_4",
        heading: "Educational qualifications",
        subheading: "What is your highest educational qualification?",
        options: [
          {
            name: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard.",
            value: 20,
          },
          {
            name: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard.",
            value: 15,
          },
          {
            name: "A diploma or trade qualification from an Australian educational institution.",
            value: 10,
          },
          {
            name: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation",
            value: 10,
          },
          { name: "Not Applicable", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_5",
        heading: "Australian study requirement",
        content: "<p>To claim this read Australian study requirement</p>",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_6",
        heading: "Specialist education qualification",
        subheading:
          "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?",
        options: [
          { name: "Yes", value: 10 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_7",
        heading: "Credentialled community language",
        subheading:
          "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_8",
        heading: "Study in regional Australia",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_9",
        heading: "Partner skills",
        subheading: "Select the relevant partner skills qualifications:",
        options: [
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria",
            value: 10,
          },
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
            value: 5,
          },
          {
            name: "You are single or your partner is an Australian citizen or permanent resident",
            value: 10,
          },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_10",
        heading: "Professional year in Australia",
        subheading: "Did you complete a professional year in Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SNQuiz_11",
        heading: "Nomination",
        subheading:
          "Have you been invited to apply for a Skilled Nominated visa (subclass 190) and the nominating State or Territory government agency has not withdrawn the nomination?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
    ],
    SNResults: false,

    // SN 489
    SRVisas: [
      {
        checked: true,
        vmodel: "SRQuiz_1",
        heading: "Age",
        subheading: "Which age band do you fit into?",
        options: [
          { name: "at least 18 but less than 25 years", value: 25 },
          { name: "at least 25 but less than 33 years", value: 30 },
          { name: "at least 33 but less than 40 years", value: 25 },
          { name: "at least 40 but less than 45 years", value: 15 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_2",
        heading: "English language requirements",
        content: "<p>Read the English language skills requirements.</p>",
        subheading: "How would you rate your English ability?",
        options: [
          { name: "Competent English", value: 5 },
          { name: "Proficient English", value: 10 },
          { name: "Superior English", value: 20 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_3",
        heading: "Skilled employment experience",
        subheading: "Overseas skilled employment – (outside Australia):",
        options: [
          { name: "Less than 3 years", value: 0 },
          { name: "At least 3 but less than 5 years", value: 5 },
          { name: "At least 5 but less than 8 years", value: 10 },
          { name: "At least 8 years", value: 15 },
        ],
        //subheading2: "Australian skilled employment – (in Australia):",
        // options2: [
        //   { name: "Less than 1 year", value: 0 },
        //   { name: "At least 1 but less than 3 years", value: 5 },
        //   { name: "At least 3 but less than 5 years", value: 10 },
        //   { name: "At least 5 but less than 8 years", value: 15 },
        //   { name: "At least 8 years", value: 20 },
        // ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_4",
        heading: "Educational qualifications",
        subheading: "What is your highest educational qualification?",
        options: [
          {
            name: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard.",
            value: 20,
          },
          {
            name: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard.",
            value: 15,
          },
          {
            name: "A diploma or trade qualification from an Australian educational institution.",
            value: 10,
          },
          {
            name: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation",
            value: 10,
          },
          { name: "Not Applicable", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_5",
        heading: "Australian study requirement",
        content: "<p>To claim this read Australian study requirement</p>",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_6",
        heading: "Specialist education qualification",
        subheading:
          "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?",
        options: [
          { name: "Yes", value: 10 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_7",
        heading: "Credentialled community language",
        subheading:
          "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_8",
        heading: "Study in regional Australia",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_9",
        heading: "Partner skills",
        subheading: "Select the relevant partner skills qualifications:",
        options: [
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria",
            value: 10,
          },
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
            value: 5,
          },
          {
            name: "You are single or your partner is an Australian citizen or permanent resident",
            value: 10,
          },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_10",
        heading: "Professional year in Australia",
        subheading: "Did you complete a professional year in Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SRQuiz_11",
        heading: "Nomination or sponsorship",
        subheading:
          "Have you been nominated or sponsored to apply for this visa?",
        options: [
          {
            name: "You were invited to apply for a Skilled Regional (Provisional) (subclass 489) visa because you were nominated and the nominating State or Territory government agency has not withdrawn that nomination",
            value: 15,
          },
          {
            name: "You are being sponsored for a Skilled Regional (Provisional) (subclass 489) visa by a family member and the Minister has accepted that sponsorship",
            value: 15,
          },
          { name: "Not applicable", value: 0 },
        ],
      },
    ],
    SRResults: false,

    // SW 491
    SWVisas: [
      {
        checked: true,
        vmodel: "SWQuiz_1",
        heading: "Age",
        subheading: "Which age band do you fit into?",
        options: [
          { name: "at least 18 but less than 25 years", value: 25 },
          { name: "at least 25 but less than 33 years", value: 30 },
          { name: "at least 33 but less than 40 years", value: 25 },
          { name: "at least 40 but less than 45 years", value: 15 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_2",
        heading: "English language requirements",
        content: "<p>Read the English language skills requirements.</p>",
        subheading: "How would you rate your English ability?",
        options: [
          { name: "Competent English", value: 5 },
          { name: "Proficient English", value: 10 },
          { name: "Superior English", value: 20 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_3",
        heading: "Skilled employment experience",
        subheading: "Overseas skilled employment – (outside Australia):",
        options: [
          { name: "Less than 3 years", value: 0 },
          { name: "At least 3 but less than 5 years", value: 5 },
          { name: "At least 5 but less than 8 years", value: 10 },
          { name: "At least 8 years", value: 15 },
        ],
        //subheading2: "Australian skilled employment – (in Australia):",
        // options2: [
        //   { name: "Less than 1 year", value: 0 },
        //   { name: "At least 1 but less than 3 years", value: 5 },
        //   { name: "At least 3 but less than 5 years", value: 10 },
        //   { name: "At least 5 but less than 8 years", value: 15 },
        //   { name: "At least 8 years", value: 20 },
        // ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_4",
        heading: "Educational qualifications",
        subheading: "What is your highest educational qualification?",
        options: [
          {
            name: "A Doctorate from an Australian educational institution or a Doctorate from another educational institution, that is of a recognised standard.",
            value: 20,
          },
          {
            name: "At least a Bachelor degree from an Australian educational institution or at least a Bachelor qualification, from another educational institution, that is of a recognised standard.",
            value: 15,
          },
          {
            name: "A diploma or trade qualification from an Australian educational institution.",
            value: 10,
          },
          {
            name: "Attained a qualification or award recognised by the relevant assessing authority for your nominated skilled occupation as being suitable for that occupation",
            value: 10,
          },
          { name: "Not Applicable", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_5",
        heading: "Australian study requirement",
        content: "<p>To claim this read Australian study requirement</p>",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that meets the Australian study requirement?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_6",
        heading: "Specialist education qualification",
        subheading:
          "Do you have a Masters degree by research or a Doctorate degree from an Australian educational institution that included at least 2 academic years to in a relevant field?",
        options: [
          { name: "Yes", value: 10 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_7",
        heading: "Credentialled community language",
        subheading:
          "Have you been accredited at the paraprofessional level or above, certified at the certified provisional level or above, or have a community language credential for interpreting or translating by the National Accreditation Authority for Translators and Interpreters.*?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_8",
        heading: "Study in regional Australia",
        subheading:
          "Do you have at least 1 degree, diploma or trade qualification from an Australian educational institution that satisfies the Australian study requirement obtained while living and studying in an eligible area of regional Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_9",
        heading: "Partner skills",
        subheading: "Select the relevant partner skills qualifications:",
        options: [
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and meet age, English and skill criteria",
            value: 10,
          },
          {
            name: "Your spouse or de facto partner must also be an applicant for this visa and has competent English",
            value: 5,
          },
          {
            name: "You are single or your partner is an Australian citizen or permanent resident",
            value: 10,
          },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_10",
        heading: "Professional year in Australia",
        subheading: "Did you complete a professional year in Australia?",
        options: [
          { name: "Yes", value: 5 },
          { name: "No", value: 0 },
        ],
      },
      {
        checked: false,
        vmodel: "SWQuiz_11",
        heading: "Nomination or sponsorship",
        subheading:
          "Have you been nominated or sponsored to apply for this visa?",
        options: [
          {
            name: "You were invited to apply for a Skilled Work Regional (Provisional) visa (subclass 491) because you were nominated and the nominating State or Territory government agency has not withdrawn that nomination",
            value: 15,
          },
          {
            name: "You are being sponsored for a Skilled Work Regional (Provisional) visa (subclass 491) visa by a family member and the Minister has accepted that sponsorship",
            value: 15,
          },
          { name: "Not applicable", value: 0 },
        ],
      },
    ],
    SWResults: false,
  },
  methods: {
    // BI Method
    biiQuizOnChange(currentIndex) {
      // the points is automatically calculated in our computed function,
      // so all we have to do is go to the next item, by updating the checked value
      // it will also update the visibility, because we use v-show="b.checked"

      // make the current question in-active
      this.BIIVisas[currentIndex].checked = false;

      // calculate next index
      //const nextIndex = currentIndex + 1;
      const nextIndex = currentIndex + 1;

      // is the nextIndex less than the number of items?
      if (nextIndex < this.BIIVisas.length) {
        this.BIIVisas[nextIndex].checked = true;
      }

      // activate the 'next' question

      /*

      console.log(e);
      console.log("a1", document.getElementsByName(e.target.id));
      var points = 0;

      this.currentPoints = document.getElementsByName(e.target.id)[0].value =
        event.target.value;

      console.log(
        "this.currentPoints",
        document.getElementsByName(this.currentPoints)
      );

      console.log("e.path[1].id", document.getElementsByName(e.path[1].id));

      // Current Element
      console.log("not hiding... starting");
      //document.getElementById(e.path[1].id).style.display = "none";
      console.log("not hiding... done");
      // Next Element
      document.getElementById(e.path[1].nextSibling.id).style.display = "block";

      var lastElement = $("." + e.path[2].className)
        .find(".form-group")
        .last();

      $(".BIIResults").find(".row:last-child").prev().addClass("d-none");
      lastElement.children().addClass("d-none");
      // Total Results
      if (lastElement.css("display") == "block") {
        this.BIIResults = true;
        //document.getElementsByName("BIITotalPoints")[0].value = current;
      }
      */
    },
    // SI Method
    SIQuizonChange(e) {
      console.log(e);
      this.point = document.getElementsByName(e.target.id)[0].value =
        event.target.value;

      // Current Element
      document.getElementById(e.path[1].id).style.display = "none";
      // Next Element
      document.getElementById(e.path[1].nextSibling.id).style.display = "block";
      // Displays the final results
      //this.SIResults = true;
      //
      // document.getElementsByName("BIITotalPoints")[0].value = parseInt(
      //   this.point++
      // );
    },
    // SN Method
    SNQuizonChange(e) {
      console.log(e);
      this.points = document.getElementsByName(e.target.id)[0].value =
        event.target.value;

      // Current Element
      document.getElementById(e.path[1].id).style.display = "none";
      // Next Element
      document.getElementById(e.path[1].nextSibling.id).style.display = "block";
    },
    // SR Method
    SRQuizonChange(e) {
      console.log(e);
      this.point = document.getElementsByName(e.target.id)[0].value =
        event.target.value;

      // Current Element
      document.getElementById(e.path[1].id).style.display = "none";
      // Next Element
      document.getElementById(e.path[1].nextSibling.id).style.display = "block";
      // Displays the final results
      //this.SIResults = true;
      //
      // document.getElementsByName("BIITotalPoints")[0].value = parseInt(
      //   this.point++
      // );
    },
    // SRQuiz_11onChange(e) {
    //   this.v11 = document.getElementsByName("SRQuiz_11")[0].value =
    //     e.target.value;
    //   this.SRResults = true;
    //   document.getElementsByName("SRTotalPoints")[0].value =
    //     parseInt(this.v1) +
    //     parseInt(this.v2) +
    //     parseInt(this.v31) +
    //     parseInt(this.v3) +
    //     parseInt(this.v4) +
    //     parseInt(this.v5) +
    //     parseInt(this.v6) +
    //     parseInt(this.v7) +
    //     parseInt(this.v8) +
    //     parseInt(this.v9) +
    //     parseInt(this.v10) +
    //     parseInt(this.v11);
    // },

    // SW Method
    // SR Methods
    SWQuizonChange(e) {
      console.log(e);
      this.point = document.getElementsByName(e.target.id)[0].value =
        event.target.value;

      // Current Element
      document.getElementById(e.path[1].id).style.display = "none";
      // Next Element
      document.getElementById(e.path[1].nextSibling.id).style.display = "block";
      // Displays the final results
      //this.SWResults = true;
      //
      // document.getElementsByName("BIITotalPoints")[0].value = parseInt(
      //   this.point++
      // );
    },

    //Reset Calculator
    resetCalculator: function (event) {
      alert(
        "Are you sure you want to reset this form? If you reset this form all the information entered will be lost."
      );
      window.location.reload();
    },
  },
  computed: {
    biiVisasCurrentIndex() {
      var index = this.BIIVisas.findIndex((b) => b.checked);
      return index;
    },
    biiVisaPercentage() {
      //one-liner: return parseInt((this.currentBiiVisasIndex + 1 / this.BIIVisas.length) * 100);
      var percent =
        ((this.biiVisasCurrentIndex + 1) / this.BIIVisas.length) * 100;
      return parseInt(percent);
    },
    biiVisaTotalPoints: function () {
      var totalPoints = 0;
      this.BIIVisas.forEach((b) => {
        totalPoints = totalPoints + parseInt(b.model);
      });
      return totalPoints;
    },
    /*
        To make the visibilty of the summary section more simple,
        let use a computed variable to calculate whether the questionnaire is complete.

        We know the questionnaire is complete, when all the questions were answered.
        Because we made initialized all the variables to null, we know the questionnaire is 
        complete when no questions is null anymore.

        lets write a computed function for that
    */
    biiVisaQuestionnaireCompleted: function () {
      // find any items who's vmodel is still null
      //const completed = this.BIIVisas.find((b) => b.vmodel == null);

      /*
        hasNullValues = true =>
            not complete => 
                completed = false

        hasNullValues = false =>
            is complete => 
                completed = true
      */
      var hasNullValues = this.BIIVisas.find((b) => b.model == null);

      if (hasNullValues) {
        return false;
      } else {
        // questionnaire is complete
        return true;
      }
    },
  },
});
