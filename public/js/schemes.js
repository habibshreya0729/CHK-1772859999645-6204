// Government Recognized Schemes Data
const governmentSchemes = {
    water: [
        {
            id: 'jjm',
            name: 'Jal Jeevan Mission (JJM)',
            nameHi: 'जल जीवन मिशन',
            nameMr: 'जल जीवन मिशन',
            description: 'Aims to provide functional household tap connection (FHTC) to every rural household by 2024. Ensures regular and long-term safe drinking water supply.',
            descriptionHi: '2024 तक हर ग्रामीण घर को कार्यात्मक घरेलू नल कनेक्शन (FHTC) प्रदान करने का लक्ष्य। नियमित और दीर्घकालिक सुरक्षित पेयजल आपूर्ति सुनिश्चित करता है।',
            descriptionMr: '2024 पर्यंत प्रत्येक ग्रामीण घराला कार्यात्मक घरगुती नळ कनेक्शन (FHTC) प्रदान करण्याचे उद्दिष्ट. नियमित आणि दीर्घकालीन सुरक्षित पिण्याच्या पाण्याचा पुरवठा सुनिश्चित करते.',
            ministry: 'Ministry of Jal Shakti',
            ministryHi: 'जल शक्ति मंत्रालय',
            ministryMr: 'जल शक्ती मंत्रालय',
            launchYear: '2019',
            eligibility: 'All rural households in India',
            eligibilityHi: 'भारत के सभी ग्रामीण परिवार',
            eligibilityMr: 'भारतातील सर्व ग्रामीण कुटुंबे',
            benefits: ['Free tap water connection', 'Assured water supply', '24x7 water availability', 'Quality drinking water'],
            benefitsHi: ['मुफ्त नल जल कनेक्शन', 'सुनिश्चित जल आपूर्ति', '24x7 जल उपलब्धता', 'गुणवत्तापूर्ण पेयजल'],
            benefitsMr: ['मोफत नळ पाणी कनेक्शन', 'खात्रीशीर पाणीपुरवठा', '24x7 पाणी उपलब्धता', 'दर्जेदार पिण्याचे पाणी'],
            website: 'https://jaljeevanmission.gov.in/',
            icon: 'fa-tint'
        },
        {
            id: 'aby',
            name: 'Atal Bhujal Yojana (ABY)',
            nameHi: 'अटल भूजल योजना',
            nameMr: 'अटल भूजल योजना',
            description: 'Aims to improve groundwater management in priority areas through community participation. Focuses on sustainable groundwater management.',
            descriptionHi: 'सामुदायिक भागीदारी के माध्यम से प्राथमिकता वाले क्षेत्रों में भूजल प्रबंधन में सुधार करना। टिकाऊ भूजल प्रबंधन पर ध्यान केंद्रित करता है।',
            descriptionMr: 'सामुदायिक सहभागाद्वारे प्राधान्य क्षेत्रांमध्ये भूजल व्यवस्थापन सुधारणे. शाश्वत भूजल व्यवस्थापनावर लक्ष केंद्रित करते.',
            ministry: 'Ministry of Jal Shakti',
            ministryHi: 'जल शक्ति मंत्रालय',
            ministryMr: 'जल शक्ती मंत्रालय',
            launchYear: '2020',
            eligibility: 'Priority areas with groundwater stress in 7 states',
            eligibilityHi: '7 राज्यों में भूजल तनाव वाले प्राथमिकता क्षेत्र',
            eligibilityMr: '7 राज्यांमध्ये भूजल ताण असलेल्या प्राधान्य क्षेत्रे',
            benefits: ['Community-led groundwater management', 'Financial incentives', 'Technical support', 'Sustainable water use'],
            benefitsHi: ['समुदाय के नेतृत्व में भूजल प्रबंधन', 'वित्तीय प्रोत्साहन', 'तकनीकी सहायता', 'स्थायी जल उपयोग'],
            benefitsMr: ['समुदाय-नेतृत्वात भूजल व्यवस्थापन', 'आर्थिक प्रोत्साहन', 'तांत्रिक सहाय्य', 'शाश्वत पाणी वापर'],
            website: 'https://www.atalbhujal.in/',
            icon: 'fa-water'
        },
        {
            id: 'nwm',
            name: 'National Water Mission',
            nameHi: 'राष्ट्रीय जल मिशन',
            nameMr: 'राष्ट्रीय जल मिशन',
            description: 'Ensures integrated water resource management to conserve water, minimize wastage and ensure equitable distribution.',
            descriptionHi: 'जल संरक्षण, अपव्यय को कम करने और समान वितरण सुनिश्चित करने के लिए एकीकृत जल संसाधन प्रबंधन सुनिश्चित करता है।',
            descriptionMr: 'पाणी संवर्धन, अपव्यय कमी करणे आणि समान वितरण सुनिश्चित करण्यासाठी एकात्मिक जल संसाधन व्यवस्थापन सुनिश्चित करते.',
            ministry: 'Ministry of Jal Shakti',
            ministryHi: 'जल शक्ति मंत्रालय',
            ministryMr: 'जल शक्ती मंत्रालय',
            launchYear: '2011',
            eligibility: 'All states and union territories',
            eligibilityHi: 'सभी राज्य और केंद्र शासित प्रदेश',
            eligibilityMr: 'सर्व राज्ये आणि केंद्रशासित प्रदेश',
            benefits: ['Water conservation', 'Pollution control', 'Efficiency improvement', 'Awareness programs'],
            benefitsHi: ['जल संरक्षण', 'प्रदूषण नियंत्रण', 'दक्षता सुधार', 'जागरूकता कार्यक्रम'],
            benefitsMr: ['जल संवर्धन', 'प्रदूषण नियंत्रण', 'कार्यक्षमता सुधारणा', 'जागरूकता कार्यक्रम'],
            website: 'https://nwm.gov.in/',
            icon: 'fa-tint-slash'
        }
    ],
    
    electricity: [
        {
            id: 'saubhagya',
            name: 'Pradhan Mantri Sahaj Bijli Har Ghar Yojana (Saubhagya)',
            nameHi: 'प्रधानमंत्री सहज बिजली हर घर योजना (सौभाग्य)',
            nameMr: 'प्रधानमंत्री सहज बिजली हर घर योजना (सौभाग्य)',
            description: 'Universal household electrification scheme providing last-mile connectivity and electricity connections to all households.',
            descriptionHi: 'सार्वभौमिक घरेलू विद्युतीकरण योजना सभी घरों को अंतिम-मील कनेक्टिविटी और बिजली कनेक्शन प्रदान करती है।',
            descriptionMr: 'सार्वत्रिक घरगुती विद्युतीकरण योजना सर्व घरांना अंतिम-मैल कनेक्टिव्हिटी आणि वीज कनेक्शन प्रदान करते.',
            ministry: 'Ministry of Power',
            ministryHi: 'विद्युत मंत्रालय',
            ministryMr: 'वीज मंत्रालय',
            launchYear: '2017',
            eligibility: 'All un-electrified households (poor households get free connection)',
            eligibilityHi: 'सभी गैर-विद्युतीकृत घर (गरीब परिवारों को मुफ्त कनेक्शन)',
            eligibilityMr: 'सर्व विजेशून घरे (गरीब कुटुंबांना मोफत कनेक्शन)',
            benefits: ['Free electricity connection', 'Subsidized connection for BPL families', 'Quick installation', 'Reliable power supply'],
            benefitsHi: ['मुफ्त बिजली कनेक्शन', 'बीपीएल परिवारों के लिए सब्सिडी वाला कनेक्शन', 'त्वरित स्थापना', 'विश्वसनीय बिजली आपूर्ति'],
            benefitsMr: ['मोफत वीज कनेक्शन', 'बीपीएल कुटुंबांसाठी अनुदानित कनेक्शन', 'जलद स्थापना', 'विश्वासार्ह वीज पुरवठा'],
            website: 'https://saubhagya.gov.in/',
            icon: 'fa-lightbulb'
        },
        {
            id: 'kusum',
            name: 'PM-KUSUM (Kisan Urja Suraksha evam Utthaan Mahabhiyan)',
            nameHi: 'पीएम-कुसुम (किसान ऊर्जा सुरक्षा एवं उत्थान महाअभियान)',
            nameMr: 'पीएम-कुसुम (किसान ऊर्जा सुरक्षा एवं उत्थान महाभियान)',
            description: 'Provides financial support to farmers for installation of solar pumps and grid-connected solar power plants.',
            descriptionHi: 'किसानों को सोलर पंप और ग्रिड से जुड़े सौर ऊर्जा संयंत्रों की स्थापना के लिए वित्तीय सहायता प्रदान करता है।',
            descriptionMr: 'शेतकऱ्यांना सौर पंप आणि ग्रिड-कनेक्टेड सौर ऊर्जा संयंत्रांच्या स्थापनेसाठी आर्थिक सहाय्य प्रदान करते.',
            ministry: 'Ministry of New and Renewable Energy',
            ministryHi: 'नवीन और नवीकरणीय ऊर्जा मंत्रालय',
            ministryMr: 'नवीन आणि नवीकरणीय ऊर्जा मंत्रालय',
            launchYear: '2019',
            eligibility: 'Farmers and farmer groups across India',
            eligibilityHi: 'भारत भर के किसान और किसान समूह',
            eligibilityMr: 'भारतभरातील शेतकरी आणि शेतकरी गट',
            benefits: ['90% subsidy for solar pumps', 'Reduced electricity bills', 'Additional income from selling power', 'Clean energy'],
            benefitsHi: ['सोलर पंप के लिए 90% सब्सिडी', 'कम बिजली बिल', 'बिजली बेचने से अतिरिक्त आय', 'स्वच्छ ऊर्जा'],
            benefitsMr: ['सौर पंपासाठी 90% अनुदान', 'कमी वीज बिले', 'वीज विकून अतिरिक्त उत्पन्न', 'स्वच्छ ऊर्जा'],
            website: 'https://pmkusum.mnre.gov.in/',
            icon: 'fa-solar-panel'
        },
        {
            id: 'uday',
            name: 'UDAY (Ujwal Discom Assurance Yojana)',
            nameHi: 'उदय (उज्ज्वल डिस्कॉम आश्वासन योजना)',
            nameMr: 'उदय (उज्ज्वल डिस्कॉम आश्वासन योजना)',
            description: 'Financial turnaround and revival package for power distribution companies to ensure uninterrupted power supply.',
            descriptionHi: 'बिजली वितरण कंपनियों के लिए वित्तीय सुधार और पुनरुद्धार पैकेज निर्बाध बिजली आपूर्ति सुनिश्चित करने के लिए।',
            descriptionMr: 'वीज वितरण कंपन्यांसाठी आर्थिक सुधारणा आणि पुनरुज्जीवन पॅकेज अखंड वीज पुरवठा सुनिश्चित करण्यासाठी.',
            ministry: 'Ministry of Power',
            ministryHi: 'विद्युत मंत्रालय',
            ministryMr: 'वीज मंत्रालय',
            launchYear: '2015',
            eligibility: 'State power distribution companies',
            eligibilityHi: 'राज्य बिजली वितरण कंपनियां',
            eligibilityMr: 'राज्य वीज वितरण कंपन्या',
            benefits: ['Improved power infrastructure', 'Reduced AT&C losses', 'Better service delivery', 'Financial stability'],
            benefitsHi: ['सुधरी हुई बिजली बुनियादी ढांचा', 'कम एटी एंड सी नुकसान', 'बेहतर सेवा वितरण', 'वित्तीय स्थिरता'],
            benefitsMr: ['सुधारित वीज पायाभूत सुविधा', 'कमी एटी अँड सी तोटा', 'चांगली सेवा वितरण', 'आर्थिक स्थिरता'],
            website: 'https://powermin.gov.in/',
            icon: 'fa-bolt'
        }
    ],
    
    sanitation: [
        {
            id: 'sbm',
            name: 'Swachh Bharat Mission (SBM)',
            nameHi: 'स्वच्छ भारत मिशन',
            nameMr: 'स्वच्छ भारत मिशन',
            description: 'National campaign to clean streets, roads and infrastructure. Aims to eliminate open defecation and improve solid waste management.',
            descriptionHi: 'सड़कों, गलियों और बुनियादी ढांचे को साफ करने के लिए राष्ट्रीय अभियान। खुले में शौच को समाप्त करने और ठोस अपशिष्ट प्रबंधन में सुधार करना।',
            descriptionMr: 'रस्ते, गल्ली आणि पायाभूत सुविधा स्वच्छ करण्यासाठी राष्ट्रीय मोहीम. उघड्यावर शौचास संपवणे आणि घनकचरा व्यवस्थापन सुधारणे.',
            ministry: 'Ministry of Jal Shakti (Department of Drinking Water and Sanitation)',
            ministryHi: 'जल शक्ति मंत्रालय (पेयजल और स्वच्छता विभाग)',
            ministryMr: 'जल शक्ती मंत्रालय (पिण्याचे पाणी आणि स्वच्छता विभाग)',
            launchYear: '2014',
            eligibility: 'All citizens, rural and urban areas',
            eligibilityHi: 'सभी नागरिक, ग्रामीण और शहरी क्षेत्र',
            eligibilityMr: 'सर्व नागरिक, ग्रामीण आणि शहरी क्षेत्रे',
            benefits: ['Rs 12,000 subsidy for toilet construction', 'Improved sanitation', 'Open Defecation Free (ODF) villages', 'Waste management systems'],
            benefitsHi: ['शौचालय निर्माण के लिए ₹12,000 सब्सिडी', 'सुधरी हुई स्वच्छता', 'खुले में शौच मुक्त (ओडीएफ) गांव', 'अपशिष्ट प्रबंधन प्रणाली'],
            benefitsMr: ['शौचालय बांधकामासाठी ₹12,000 अनुदान', 'सुधारित स्वच्छता', 'उघड्यावर शौचमुक्त (ओडीएफ) गावे', 'कचरा व्यवस्थापन प्रणाली'],
            website: 'https://swachhbharatmission.gov.in/',
            icon: 'fa-recycle'
        },
        {
            id: 'amrut',
            name: 'AMRUT (Atal Mission for Rejuvenation and Urban Transformation)',
            nameHi: 'अमृत (अटल कायाकल्प और शहरी परिवर्तन मिशन)',
            nameMr: 'अमृत (अटल कायाकल्प आणि शहरी परिवर्तन मिशन)',
            description: 'Ensures every household has access to tap water and sewerage connection. Focus on improving amenities in cities.',
            descriptionHi: 'सुनिश्चित करता है कि प्रत्येक घर में नल का पानी और सीवरेज कनेक्शन हो। शहरों में सुविधाओं में सुधार पर ध्यान केंद्रित करना।',
            descriptionMr: 'प्रत्येक घरात नळाचे पाणी आणि सांडपाणी कनेक्शन असल्याची खात्री करते. शहरांमध्ये सुविधा सुधारण्यावर लक्ष केंद्रित करणे.',
            ministry: 'Ministry of Housing and Urban Affairs',
            ministryHi: 'आवास और शहरी कार्य मंत्रालय',
            ministryMr: 'गृहनिर्माण आणि शहरी व्यवहार मंत्रालय',
            launchYear: '2015',
            eligibility: '500 cities across India',
            eligibilityHi: 'भारत भर में 500 शहर',
            eligibilityMr: 'भारतभर 500 शहरे',
            benefits: ['Water supply infrastructure', 'Sewerage systems', 'Drainage facilities', 'Green spaces and parks'],
            benefitsHi: ['जल आपूर्ति बुनियादी ढांचा', 'सीवरेज सिस्टम', 'जल निकासी सुविधाएं', 'हरित स्थान और पार्क'],
            benefitsMr: ['पाणीपुरवठा पायाभूत सुविधा', 'सांडपाणी व्यवस्था', 'निचरा सुविधा', 'हरितगृह आणि उद्याने'],
            website: 'https://amrut.gov.in/',
            icon: 'fa-city'
        },
        {
            id: 'nulm',
            name: 'NULM (National Urban Livelihoods Mission)',
            nameHi: 'एनयूएलएम (राष्ट्रीय शहरी आजीविका मिशन)',
            nameMr: 'एनयूएलएम (राष्ट्रीय शहरी उपजीविका मिशन)',
            description: 'Aims to reduce poverty in urban areas by providing skill training and self-employment opportunities including waste management.',
            descriptionHi: 'कौशल प्रशिक्षण और स्व-रोजगार के अवसर प्रदान करके शहरी क्षेत्रों में गरीबी को कम करना, जिसमें अपशिष्ट प्रबंधन शामिल है।',
            descriptionMr: 'कौशल्य प्रशिक्षण आणि स्वयंरोजगार संधी प्रदान करून शहरी भागात गरिबी कमी करणे, ज्यात कचरा व्यवस्थापन समाविष्ट आहे.',
            ministry: 'Ministry of Housing and Urban Affairs',
            ministryHi: 'आवास और शहरी कार्य मंत्रालय',
            ministryMr: 'गृहनिर्माण आणि शहरी व्यवहार मंत्रालय',
            launchYear: '2013',
            eligibility: 'Urban poor and street vendors',
            eligibilityHi: 'शहरी गरीब और फुटपाथ विक्रेता',
            eligibilityMr: 'शहरी गरीब आणि रस्त्यावरील विक्रेते',
            benefits: ['Skill training', 'Self-employment loans', 'Street vendor support', 'Waste picker integration'],
            benefitsHi: ['कौशल प्रशिक्षण', 'स्व-रोजगार ऋण', 'फुटपाथ विक्रेता समर्थन', 'कचरा उठाने वालों का एकीकरण'],
            benefitsMr: ['कौशल्य प्रशिक्षण', 'स्वयंरोजगार कर्ज', 'रस्त्यावरील विक्रेता समर्थन', 'कचरा उचलणाऱ्यांचे एकत्रीकरण'],
            website: 'https://nulm.gov.in/',
            icon: 'fa-users'
        }
    ],
    
    road: [
        {
            id: 'pmgsy',
            name: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
            nameHi: 'प्रधानमंत्री ग्राम सड़क योजना',
            nameMr: 'प्रधानमंत्री ग्राम सडक योजना',
            description: 'Provides connectivity to unconnected habitations through good all-weather roads. Improves rural accessibility.',
            descriptionHi: 'अच्छी सभी मौसम सड़कों के माध्यम से असंबद्ध बस्तियों को कनेक्टिविटी प्रदान करता है। ग्रामीण पहुंच में सुधार करता है।',
            descriptionMr: 'चांगल्या सर्व हवामान रस्त्यांद्वारे जोडलेल्या वस्त्यांना कनेक्टिव्हिटी प्रदान करते. ग्रामीण प्रवेश सुधारते.',
            ministry: 'Ministry of Rural Development',
            ministryHi: 'ग्रामीण विकास मंत्रालय',
            ministryMr: 'ग्रामीण विकास मंत्रालय',
            launchYear: '2000',
            eligibility: 'Unconnected habitations in rural areas',
            eligibilityHi: 'ग्रामीण क्षेत्रों में असंबद्ध बस्तियां',
            eligibilityMr: 'ग्रामीण भागात जोडलेली वस्ती',
            benefits: ['All-weather road connectivity', 'Improved market access', 'Better healthcare access', 'Enhanced education facilities access'],
            benefitsHi: ['सभी मौसम सड़क संपर्क', 'बेहतर बाजार पहुंच', 'बेहतर स्वास्थ्य सेवा पहुंच', 'बेहतर शिक्षा सुविधाओं की पहुंच'],
            benefitsMr: ['सर्व हवामान रस्ता कनेक्टिव्हिटी', 'सुधारित बाजार प्रवेश', 'चांगली आरोग्य सेवा प्रवेश', 'वर्धित शिक्षण सुविधा प्रवेश'],
            website: 'https://pmgsy.nic.in/',
            icon: 'fa-road'
        },
        {
            id: 'smartcities',
            name: 'Smart Cities Mission',
            nameHi: 'स्मार्ट सिटी मिशन',
            nameMr: 'स्मार्ट सिटी मिशन',
            description: 'Promotes sustainable and inclusive development by creating model cities with smart infrastructure, clean environment and adequate transport.',
            descriptionHi: 'स्मार्ट बुनियादी ढांचे, स्वच्छ वातावरण और पर्याप्त परिवहन के साथ मॉडल शहरों का निर्माण करके टिकाऊ और समावेशी विकास को बढ़ावा देता है।',
            descriptionMr: 'स्मार्ट पायाभूत सुविधा, स्वच्छ पर्यावरण आणि पुरेसे वाहतुकीसह मॉडेल शहरे तयार करून शाश्वत आणि समावेशक विकासाला प्रोत्साहन देते.',
            ministry: 'Ministry of Housing and Urban Affairs',
            ministryHi: 'आवास और शहरी कार्य मंत्रालय',
            ministryMr: 'गृहनिर्माण आणि शहरी व्यवहार मंत्रालय',
            launchYear: '2015',
            eligibility: '100 selected cities across India',
            eligibilityHi: 'भारत भर में चयनित 100 शहर',
            eligibilityMr: 'भारतभर निवडलेली 100 शहरे',
            benefits: ['Intelligent traffic management', 'Smart parking', 'Wi-Fi hotspots', 'Smart street lighting', 'Advanced public transport'],
            benefitsHi: ['बुद्धिमान ट्रैफिक प्रबंधन', 'स्मार्ट पार्किंग', 'वाई-फाई हॉटस्पॉट', 'स्मार्ट स्ट्रीट लाइटिंग', 'उन्नत सार्वजनिक परिवहन'],
            benefitsMr: ['बुद्धिमान रहदारी व्यवस्थापन', 'स्मार्ट पार्किंग', 'वाय-फाय हॉटस्पॉट', 'स्मार्ट रस्ता दिवे', 'प्रगत सार्वजनिक वाहतूक'],
            website: 'https://smartcities.gov.in/',
            icon: 'fa-city'
        },
        {
            id: 'bharatmala',
            name: 'Bharatmala Pariyojana',
            nameHi: 'भारतमाला परियोजना',
            nameMr: 'भारतमाला परियोजना',
            description: 'Umbrella program for highways sector focusing on optimizing efficiency of freight and passenger movement across the country.',
            descriptionHi: 'राजमार्ग क्षेत्र के लिए एक व्यापक कार्यक्रम जो देश भर में माल ढुलाई और यात्री आवागमन की दक्षता को अनुकूलित करने पर केंद्रित है।',
            descriptionMr: 'महामार्ग क्षेत्रासाठी छत्री कार्यक्रम जो देशभरात मालवाहतूक आणि प्रवासी हालचालीची कार्यक्षमता अनुकूल करण्यावर लक्ष केंद्रित करतो.',
            ministry: 'Ministry of Road Transport and Highways',
            ministryHi: 'सड़क परिवहन और राजमार्ग मंत्रालय',
            ministryMr: 'सडक परिवहन आणि महामार्ग मंत्रालय',
            launchYear: '2017',
            eligibility: 'National highway development across India',
            eligibilityHi: 'भारत भर में राष्ट्रीय राजमार्ग विकास',
            eligibilityMr: 'भारतभरातील राष्ट्रीय महामार्ग विकास',
            benefits: ['Economic corridors', 'Border connectivity', 'Coastal roads', 'Expressways development'],
            benefitsHi: ['आर्थिक गलियारे', 'सीमा संपर्क', 'तटीय सड़कें', 'एक्सप्रेसवे विकास'],
            benefitsMr: ['आर्थिक कॉरिडॉर', 'सीमा कनेक्टिव्हिटी', 'किनारी रस्ते', 'एक्सप्रेसवे विकास'],
            website: 'https://morth.nic.in/',
            icon: 'fa-road'
        }
    ]
};

// Load schemes based on department
function loadSchemes(department = 'all') {
    const schemesContainer = document.getElementById('schemesContainer');
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    if (!schemesContainer) return;
    
    schemesContainer.innerHTML = '';
    
    let departmentsToShow = department === 'all' 
        ? ['water', 'electricity', 'sanitation', 'road'] 
        : [department];
    
    departmentsToShow.forEach(dept => {
        const schemes = governmentSchemes[dept];
        if (!schemes) return;
        
        // Department header
        const deptTitle = getDepartmentTitle(dept, currentLang);
        const deptSection = document.createElement('div');
        deptSection.className = 'mb-4';
        deptSection.innerHTML = `
            <h3 class="text-primary mb-3">
                <i class="fas ${getDepartmentIcon(dept)}"></i> ${deptTitle}
            </h3>
        `;
        
        // Schemes grid
        const schemesGrid = document.createElement('div');
        schemesGrid.className = 'row g-4';
        
        schemes.forEach(scheme => {
            const schemeCard = createSchemeCard(scheme, currentLang);
            schemesGrid.innerHTML += schemeCard;
        });
        
        deptSection.appendChild(schemesGrid);
        schemesContainer.appendChild(deptSection);
    });
}

// Create scheme card HTML
function createSchemeCard(scheme, lang) {
    const name = lang === 'hi' ? scheme.nameHi : (lang === 'mr' ? scheme.nameMr : scheme.name);
    const desc = lang === 'hi' ? scheme.descriptionHi : (lang === 'mr' ? scheme.descriptionMr : scheme.description);
    const ministry = lang === 'hi' ? scheme.ministryHi : (lang === 'mr' ? scheme.ministryMr : scheme.ministry);
    const eligibility = lang === 'hi' ? scheme.eligibilityHi : (lang === 'mr' ? scheme.eligibilityMr : scheme.eligibility);
    const benefits = lang === 'hi' ? scheme.benefitsHi : (lang === 'mr' ? scheme.benefitsMr : scheme.benefits);
    
    return `
        <div class="col-md-6 col-lg-4">
            <div class="scheme-card">
                <div class="scheme-icon">
                    <i class="fas ${scheme.icon}"></i>
                </div>
                <h5 class="scheme-title">${name}</h5>
                <p class="scheme-ministry"><i class="fas fa-landmark"></i> ${ministry}</p>
                <p class="scheme-year"><i class="fas fa-calendar"></i> ${lang === 'en' ? 'Launched' : lang === 'hi' ? 'शुरू' : 'सुरू'}: ${scheme.launchYear}</p>
                <p class="scheme-description">${desc}</p>
                
                <div class="scheme-details">
                    <h6><i class="fas fa-users-cog"></i> ${lang === 'en' ? 'Eligibility' : lang === 'hi' ? 'पात्रता' : 'पात्रता'}:</h6>
                    <p>${eligibility}</p>
                    
                    <h6><i class="fas fa-gift"></i> ${lang === 'en' ? 'Benefits' : lang === 'hi' ? 'लाभ' : 'फायदे'}:</h6>
                    <ul class="scheme-benefits">
                        ${benefits.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                </div>
                
                <a href="${scheme.website}" target="_blank" class="btn btn-primary btn-sm mt-3">
                    <i class="fas fa-external-link-alt"></i> 
                    ${lang === 'en' ? 'Visit Website' : lang === 'hi' ? 'वेबसाइट देखें' : 'वेबसाइट भेट द्या'}
                </a>
            </div>
        </div>
    `;
}

// Get department title by language
function getDepartmentTitle(dept, lang) {
    const titles = {
        water: { en: 'Water Supply Schemes', hi: 'जल आपूर्ति योजनाएं', mr: 'पाणीपुरवठा योजना' },
        electricity: { en: 'Electricity Schemes', hi: 'बिजली योजनाएं', mr: 'वीज योजना' },
        sanitation: { en: 'Sanitation Schemes', hi: 'स्वच्छता योजनाएं', mr: 'स्वच्छता योजना' },
        road: { en: 'Roads & Infrastructure Schemes', hi: 'सड़क और बुनियादी ढांचा योजनाएं', mr: 'रस्ते आणि पायाभूत सुविधा योजना' }
    };
    return titles[dept][lang] || titles[dept].en;
}

// Get department icon
function getDepartmentIcon(dept) {
    const icons = {
        water: 'fa-tint',
        electricity: 'fa-bolt',
        sanitation: 'fa-recycle',
        road: 'fa-road'
    };
    return icons[dept] || 'fa-building';
}

// Filter schemes by department
function filterSchemes(department) {
    loadSchemes(department);
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('schemes.html')) {
        loadSchemes('all');
    }
});
