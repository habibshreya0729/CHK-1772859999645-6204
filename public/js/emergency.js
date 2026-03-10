// Emergency Contacts Data - Real Numbers and Police Stations
const emergencyData = {
    nationalEmergency: [
        {
            id: 'national-emergency',
            name: 'National Emergency Services',
            nameHi: 'राष्ट्रीय आपातकालीन सेवाएं',
            nameMr: 'राष्ट्रीय आपत्कालीन सेवा',
            number: '112',
            description: 'Unified emergency helpline for all emergencies',
            descriptionHi: 'सभी आपात स्थितियों के लिए एकीकृत आपातकालीन हेल्पलाइन',
            descriptionMr: 'सर्व आपत्कालीन परिस्थितींसाठी एकीकृत आपत्कालीन हेल्पलाइन',
            icon: 'fa-phone-volume',
            color: '#dc3545'
        },
        {
            id: 'police',
            name: 'Police',
            nameHi: 'पुलिस',
            nameMr: 'पोलीस',
            number: '100',
            description: 'Police emergency assistance',
            descriptionHi: 'पुलिस आपातकालीन सहायता',
            descriptionMr: 'पोलीस आपत्कालीन मदत',
            icon: 'fa-shield-alt',
            color: '#0066cc'
        },
        {
            id: 'fire',
            name: 'Fire Brigade',
            nameHi: 'अग्निशमन विभाग',
            nameMr: 'अग्निशमन विभाग',
            number: '101',
            description: 'Fire emergency services',
            descriptionHi: 'अग्नि आपातकालीन सेवाएं',
            descriptionMr: 'अग्नि आपत्कालीन सेवा',
            icon: 'fa-fire-extinguisher',
            color: '#ff6b6b'
        },
        {
            id: 'ambulance',
            name: 'Ambulance',
            nameHi: 'एम्बुलेंस',
            nameMr: 'रुग्णवाहिका',
            number: '102',
            description: 'Medical emergency services',
            descriptionHi: 'चिकित्सा आपातकालीन सेवाएं',
            descriptionMr: 'वैद्यकीय आपत्कालीन सेवा',
            icon: 'fa-ambulance',
            color: '#28a745'
        },
        {
            id: 'women-helpline',
            name: 'Women Helpline',
            nameHi: 'महिला हेल्पलाइन',
            nameMr: 'महिला हेल्पलाइन',
            number: '1091',
            description: 'Women in distress helpline',
            descriptionHi: 'संकट में महिलाओं के लिए हेल्पलाइन',
            descriptionMr: 'संकटात असलेल्या महिलांसाठी हेल्पलाइन',
            icon: 'fa-female',
            color: '#e83e8c'
        },
        {
            id: 'child-helpline',
            name: 'Child Helpline',
            nameHi: 'बाल हेल्पलाइन',
            nameMr: 'बाल हेल्पलाइन',
            number: '1098',
            description: 'Child protection helpline',
            descriptionHi: 'बाल सुरक्षा हेल्पलाइन',
            descriptionMr: 'बाल संरक्षण हेल्पलाइन',
            icon: 'fa-child',
            color: '#17a2b8'
        }
    ],
    
    departmentEmergency: {
        water: [
            {
                id: 'water-emergency',
                name: 'Water Supply Emergency',
                nameHi: 'जल आपूर्ति आपातकाल',
                nameMr: 'पाणीपुरवठा आपत्काल',
                number: '1916',
                description: 'Delhi Jal Board 24x7 helpline',
                descriptionHi: 'दिल्ली जल बोर्ड 24x7 हेल्पलाइन',
                descriptionMr: 'दिल्ली जल मंडळ 24x7 हेल्पलाइन',
                region: 'Delhi / दिल्ली / दिल्ली'
            },
            {
                id: 'mumbai-water',
                name: 'BMC Water Emergency',
                nameHi: 'बीएमसी जल आपातकाल',
                nameMr: 'बीएमसी पाणी आपत्काल',
                number: '1916',
                description: 'Mumbai water supply complaints',
                descriptionHi: 'मुंबई जल आपूर्ति शिकायतें',
                descriptionMr: 'मुंबई पाणीपुरवठा तक्रारी',
                region: 'Mumbai / मुंबई / मुंबई'
            },
            {
                id: 'bangalore-water',
                name: 'BWSSB Helpline',
                nameHi: 'बीडब्ल्यूएसएसबी हेल्पलाइन',
                nameMr: 'बीडब्ल्यूएसएसबी हेल्पलाइन',
                number: '1916',
                description: 'Bangalore Water Supply helpline',
                descriptionHi: 'बैंगलोर जल आपूर्ति हेल्पलाइन',
                descriptionMr: 'बेंगलूर पाणीपुरवठा हेल्पलाइन',
                region: 'Bangalore / बैंगलोर / बेंगलूर'
            }
        ],
        
        electricity: [
            {
                id: 'delhi-electricity',
                name: 'BSES Helpline',
                nameHi: 'बीएसईएस हेल्पलाइन',
                nameMr: 'बीएसईएस हेल्पलाइन',
                number: '19123',
                description: 'BSES Delhi power outage helpline',
                descriptionHi: 'बीएसईएस दिल्ली बिजली आउटेज हेल्पलाइन',
                descriptionMr: 'बीएसईएस दिल्ली वीज बंद हेल्पलाइन',
                region: 'Delhi / दिल्ली / दिल्ली'
            },
            {
                id: 'mumbai-electricity',
                name: 'BEST Power Supply',
                nameHi: 'बेस्ट बिजली आपूर्ति',
                nameMr: 'बेस्ट वीज पुरवठा',
                number: '19122',
                description: 'Mumbai electricity complaints',
                descriptionHi: 'मुंबई बिजली शिकायतें',
                descriptionMr: 'मुंबई वीज तक्रारी',
                region: 'Mumbai / मुंबई / मुंबई'
            },
            {
                id: 'bangalore-electricity',
                name: 'BESCOM Helpline',
                nameHi: 'बेस्कॉम हेल्पलाइन',
                nameMr: 'बेस्कॉम हेल्पलाइन',
                number: '1912',
                description: 'Bangalore electricity helpline',
                descriptionHi: 'बैंगलोर बिजली हेल्पलाइन',
                descriptionMr: 'बेंगलूर वीज हेल्पलाइन',
                region: 'Bangalore / बैंगलोर / बेंगलूर'
            },
            {
                id: 'chennai-electricity',
                name: 'TANGEDCO',
                nameHi: 'टैंगेडको',
                nameMr: 'टॅंगेडको',
                number: '1912',
                description: 'Tamil Nadu electricity board',
                descriptionHi: 'तमिलनाडु बिजली बोर्ड',
                descriptionMr: 'तामिळनाडू वीज मंडळ',
                region: 'Chennai / चेन्नई / चेन्नई'
            }
        ],
        
        sanitation: [
            {
                id: 'swachh-bharat',
                name: 'Swachh Bharat Helpline',
                nameHi: 'स्वच्छ भारत हेल्पलाइन',
                nameMr: 'स्वच्छ भारत हेल्पलाइन',
                number: '1800-11-4477',
                description: 'National cleanliness mission helpline',
                descriptionHi: 'राष्ट्रीय स्वच्छता मिशन हेल्पलाइन',
                descriptionMr: 'राष्ट्रीय स्वच्छता मोहीम हेल्पलाइन',
                region: 'National / राष्ट्रीय / राष्ट्रीय'
            },
            {
                id: 'delhi-sanitation',
                name: 'MCD Sanitation',
                nameHi: 'एमसीडी स्वच्छता',
                nameMr: 'एमसीडी स्वच्छता',
                number: '1800-11-6688',
                description: 'Delhi waste management helpline',
                descriptionHi: 'दिल्ली अपशिष्ट प्रबंधन हेल्पलाइन',
                descriptionMr: 'दिल्ली कचरा व्यवस्थापन हेल्पलाइन',
                region: 'Delhi / दिल्ली / दिल्ली'
            },
            {
                id: 'mumbai-sanitation',
                name: 'BMC Sanitation',
                nameHi: 'बीएमसी स्वच्छता',
                nameMr: 'बीएमसी स्वच्छता',
                number: '1800-22-1855',
                description: 'Mumbai waste collection helpline',
                descriptionHi: 'मुंबई कचरा संग्रह हेल्पलाइन',
                descriptionMr: 'मुंबई कचरा संकलन हेल्पलाइन',
                region: 'Mumbai / मुंबई / मुंबई'
            }
        ],
        
        road: [
            {
                id: 'traffic-police',
                name: 'Traffic Police',
                nameHi: 'यातायात पुलिस',
                nameMr: 'वाहतूक पोलीस',
                number: '103',
                description: 'Traffic police helpline',
                descriptionHi: 'यातायात पुलिस हेल्पलाइन',
                descriptionMr: 'वाहतूक पोलीस हेल्पलाइन',
                region: 'Multiple Cities / कई शहर / अनेक शहरे'
            },
            {
                id: 'nhai',
                name: 'NHAI Emergency',
                nameHi: 'एनएचएआई आपातकाल',
                nameMr: 'एनएचएआय आपत्काल',
                number: '1033',
                description: 'National Highway Authority emergency',
                descriptionHi: 'राष्ट्रीय राजमार्ग प्राधिकरण आपातकाल',
                descriptionMr: 'राष्ट्रीय महामार्ग प्राधिकरण आपत्काल',
                region: 'National / राष्ट्रीय / राष्ट्रीय'
            },
            {
                id: 'delhi-pwd',
                name: 'Delhi PWD',
                nameHi: 'दिल्ली पीडब्ल्यूडी',
                nameMr: 'दिल्ली पीडब्ल्यूडी',
                number: '1800-11-3030',
                description: 'Road maintenance complaints Delhi',
                descriptionHi: 'सड़क रखरखाव शिकायतें दिल्ली',
                descriptionMr: 'रस्ता देखभाल तक्रारी दिल्ली',
                region: 'Delhi / दिल्ली / दिल्ली'
            }
        ]
    },
    
    policeStations: [
        // Delhi Police Stations
        {
            id: 'ps-connaught-place',
            name: 'Connaught Place Police Station',
            nameHi: 'कनॉट प्लेस पुलिस स्टेशन',
            nameMr: 'कनॉट प्लेस पोलीस स्टेशन',
            phone: '011-23410501',
            address: 'Connaught Place, New Delhi - 110001',
            addressHi: 'कनॉट प्लेस, नई दिल्ली - 110001',
            addressMr: 'कनॉट प्लेस, नवी दिल्ली - 110001',
            region: 'Delhi',
            regionHi: 'दिल्ली',
            regionMr: 'दिल्ली'
        },
        {
            id: 'ps-karol-bagh',
            name: 'Karol Bagh Police Station',
            nameHi: 'करोल बाग पुलिस स्टेशन',
            nameMr: 'करोल बाग पोलीस स्टेशन',
            phone: '011-28752410',
            address: 'Karol Bagh, New Delhi - 110005',
            addressHi: 'करोल बाग, नई दिल्ली - 110005',
            addressMr: 'करोल बाग, नवी दिल्ली - 110005',
            region: 'Delhi',
            regionHi: 'दिल्ली',
            regionMr: 'दिल्ली'
        },
        {
            id: 'ps-hauz-khas',
            name: 'Hauz Khas Police Station',
            nameHi: 'हौज खास पुलिस स्टेशन',
            nameMr: 'हौज खास पोलीस स्टेशन',
            phone: '011-26567720',
            address: 'Hauz Khas, New Delhi - 110016',
            addressHi: 'हौज खास, नई दिल्ली - 110016',
            addressMr: 'हौज खास, नवी दिल्ली - 110016',
            region: 'Delhi',
            regionHi: 'दिल्ली',
            regionMr: 'दिल्ली'
        },
        
        // Mumbai Police Stations
        {
            id: 'ps-colaba',
            name: 'Colaba Police Station',
            nameHi: 'कोलाबा पुलिस स्टेशन',
            nameMr: 'कोलाबा पोलीस स्टेशन',
            phone: '022-22020661',
            address: 'Colaba, Mumbai - 400005',
            addressHi: 'कोलाबा, मुंबई - 400005',
            addressMr: 'कोलाबा, मुंबई - 400005',
            region: 'Mumbai',
            regionHi: 'मुंबई',
            regionMr: 'मुंबई'
        },
        {
            id: 'ps-dadar',
            name: 'Dadar Police Station',
            nameHi: 'दादर पुलिस स्टेशन',
            nameMr: 'दादर पोलीस स्टेशन',
            phone: '022-24306042',
            address: 'Dadar, Mumbai - 400028',
            addressHi: 'दादर, मुंबई - 400028',
            addressMr: 'दादर, मुंबई - 400028',
            region: 'Mumbai',
            regionHi: 'मुंबई',
            regionMr: 'मुंबई'
        },
        {
            id: 'ps-andheri',
            name: 'Andheri Police Station',
            nameHi: 'अंधेरी पुलिस स्टेशन',
            nameMr: 'अंधेरी पोलीस स्टेशन',
            phone: '022-26246366',
            address: 'Andheri East, Mumbai - 400069',
            addressHi: 'अंधेरी पूर्व, मुंबई - 400069',
            addressMr: 'अंधेरी पूर्व, मुंबई - 400069',
            region: 'Mumbai',
            regionHi: 'मुंबई',
            regionMr: 'मुंबई'
        },
        
        // Bangalore Police Stations
        {
            id: 'ps-koramangala',
            name: 'Koramangala Police Station',
            nameHi: 'कोरमंगला पुलिस स्टेशन',
            nameMr: 'कोरमंगला पोलीस स्टेशन',
            phone: '080-25532875',
            address: 'Koramangala, Bangalore - 560034',
            addressHi: 'कोरमंगला, बैंगलोर - 560034',
            addressMr: 'कोरमंगला, बेंगलूर - 560034',
            region: 'Bangalore',
            regionHi: 'बैंगलोर',
            regionMr: 'बेंगलूर'
        },
        {
            id: 'ps-whitefield',
            name: 'Whitefield Police Station',
            nameHi: 'व्हाइटफील्ड पुलिस स्टेशन',
            nameMr: 'व्हाइटफील्ड पोलीस स्टेशन',
            phone: '080-28452450',
            address: 'Whitefield, Bangalore - 560066',
            addressHi: 'व्हाइटफील्ड, बैंगलोर - 560066',
            addressMr: 'व्हाइटफील्ड, बेंगलूर - 560066',
            region: 'Bangalore',
            regionHi: 'बैंगलोर',
            regionMr: 'बेंगलूर'
        },
        
        // Chennai Police Stations
        {
            id: 'ps-egmore',
            name: 'Egmore Police Station',
            nameHi: 'एगमोर पुलिस स्टेशन',
            nameMr: 'एगमोर पोलीस स्टेशन',
            phone: '044-28190239',
            address: 'Egmore, Chennai - 600008',
            addressHi: 'एगमोर, चेन्नई - 600008',
            addressMr: 'एगमोर, चेन्नई - 600008',
            region: 'Chennai',
            regionHi: 'चेन्नई',
            regionMr: 'चेन्नई'
        },
        {
            id: 'ps-adyar',
            name: 'Adyar Police Station',
            nameHi: 'अड्यार पुलिस स्टेशन',
            nameMr: 'अड्यार पोलीस स्टेशन',
            phone: '044-24412310',
            address: 'Adyar, Chennai - 600020',
            addressHi: 'अड्यार, चेन्नई - 600020',
            addressMr: 'अड्यार, चेन्नई - 600020',
            region: 'Chennai',
            regionHi: 'चेन्नई',
            regionMr: 'चेन्नई'
        },
        
        // Pune Police Stations
        {
            id: 'ps-shivajinagar',
            name: 'Shivajinagar Police Station',
            nameHi: 'शिवाजीनगर पुलिस स्टेशन',
            nameMr: 'शिवाजीनगर पोलीस स्टेशन',
            phone: '020-25538251',
            address: 'Shivajinagar, Pune - 411005',
            addressHi: 'शिवाजीनगर, पुणे - 411005',
            addressMr: 'शिवाजीनगर, पुणे - 411005',
            region: 'Pune',
            regionHi: 'पुणे',
            regionMr: 'पुणे'
        },
        {
            id: 'ps-kothrud',
            name: 'Kothrud Police Station',
            nameHi: 'कोठरुड पुलिस स्टेशन',
            nameMr: 'कोथरूड पोलीस स्टेशन',
            phone: '020-25468244',
            address: 'Kothrud, Pune - 411038',
            addressHi: 'कोठरुड, पुणे - 411038',
            addressMr: 'कोथरूड, पुणे - 411038',
            region: 'Pune',
            regionHi: 'पुणे',
            regionMr: 'पुणे'
        },
        
        // Hyderabad Police Stations
        {
            id: 'ps-banjara-hills',
            name: 'Banjara Hills Police Station',
            nameHi: 'बांजारा हिल्स पुलिस स्टेशन',
            nameMr: 'बांजारा हिल्स पोलीस स्टेशन',
            phone: '040-23355284',
            address: 'Banjara Hills, Hyderabad - 500034',
            addressHi: 'बांजारा हिल्स, हैदराबाद - 500034',
            addressMr: 'बांजारा हिल्स, हैदराबाद - 500034',
            region: 'Hyderabad',
            regionHi: 'हैदराबाद',
            regionMr: 'हैदराबाद'
        },
        {
            id: 'ps-jubilee-hills',
            name: 'Jubilee Hills Police Station',
            nameHi: 'जुबली हिल्स पुलिस स्टेशन',
            nameMr: 'जुबली हिल्स पोलीस स्टेशन',
            phone: '040-23550274',
            address: 'Jubilee Hills, Hyderabad - 500033',
            addressHi: 'जुबली हिल्स, हैदराबाद - 500033',
            addressMr: 'जुबली हिल्स, हैदराबाद - 500033',
            region: 'Hyderabad',
            regionHi: 'हैदराबाद',
            regionMr: 'हैदराबाद'
        }
    ]
};

// Toggle emergency widget
function toggleEmergencyWidget() {
    const widget = document.getElementById('emergencyWidget');
    const isCollapsed = widget.classList.contains('collapsed');
    
    if (isCollapsed) {
        widget.classList.remove('collapsed');
        widget.classList.add('expanded');
        localStorage.setItem('emergencyWidgetState', 'expanded');
    } else {
        widget.classList.add('collapsed');
        widget.classList.remove('expanded');
        localStorage.setItem('emergencyWidgetState', 'collapsed');
    }
}

// Close emergency widget completely
function closeEmergencyWidget() {
    const widget = document.getElementById('emergencyWidget');
    widget.classList.add('hidden');
    localStorage.setItem('emergencyWidgetState', 'hidden');
}

// Load emergency contacts based on active tab
function loadEmergencyContacts(type = 'national') {
    const container = document.getElementById('emergencyContent');
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    if (!container) return;
    
    container.innerHTML = '';
    
    if (type === 'national') {
        // Display national emergency numbers
        emergencyData.nationalEmergency.forEach(item => {
            const name = currentLang === 'hi' ? item.nameHi : currentLang === 'mr' ? item.nameMr : item.name;
            const desc = currentLang === 'hi' ? item.descriptionHi : currentLang === 'mr' ? item.descriptionMr : item.description;
            
            container.innerHTML += `
                <div class="emergency-item">
                    <div class="emergency-icon" style="background-color: ${item.color}">
                        <i class="fas ${item.icon}"></i>
                    </div>
                    <div class="emergency-details">
                        <h6>${name}</h6>
                        <p>${desc}</p>
                        <a href="tel:${item.number}" class="emergency-number">
                            <i class="fas fa-phone"></i> ${item.number}
                        </a>
                    </div>
                </div>
            `;
        });
    } else if (type === 'department') {
        // Display department-wise emergency numbers
        const departments = ['water', 'electricity', 'sanitation', 'road'];
        departments.forEach(dept => {
            const deptName = getDepartmentName(dept, currentLang);
            const items = emergencyData.departmentEmergency[dept];
            
            container.innerHTML += `<div class="emergency-dept-header"><i class="fas ${getDepartmentIcon(dept)}"></i> ${deptName}</div>`;
            
            items.forEach(item => {
                const name = currentLang === 'hi' ? item.nameHi : currentLang === 'mr' ? item.nameMr : item.name;
                const desc = currentLang === 'hi' ? item.descriptionHi : currentLang === 'mr' ? item.descriptionMr : item.description;
                
                container.innerHTML += `
                    <div class="emergency-item-small">
                        <div class="emergency-small-header">
                            <strong>${name}</strong>
                            <span class="emergency-region">${item.region}</span>
                        </div>
                        <p class="emergency-small-desc">${desc}</p>
                        <a href="tel:${item.number}" class="emergency-number-sm">
                            <i class="fas fa-phone"></i> ${item.number}
                        </a>
                    </div>
                `;
            });
        });
    } else if (type === 'police') {
        // Display police stations by region
        const regions = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
        regions.forEach(region => {
            const stations = emergencyData.policeStations.filter(ps => ps.region === region);
            if (stations.length > 0) {
                const regionName = currentLang === 'hi' ? stations[0].regionHi : currentLang === 'mr' ? stations[0].regionMr : region;
                container.innerHTML += `<div class="emergency-dept-header"><i class="fas fa-map-marker-alt"></i> ${regionName}</div>`;
                
                stations.forEach(station => {
                    const name = currentLang === 'hi' ? station.nameHi : currentLang === 'mr' ? station.nameMr : station.name;
                    const address = currentLang === 'hi' ? station.addressHi : currentLang === 'mr' ? station.addressMr : station.address;
                    
                    container.innerHTML += `
                        <div class="police-station-item">
                            <div class="police-station-header">
                                <i class="fas fa-building"></i>
                                <strong>${name}</strong>
                            </div>
                            <p class="police-address"><i class="fas fa-map-marker-alt"></i> ${address}</p>
                            <a href="tel:${station.phone}" class="emergency-number-sm">
                                <i class="fas fa-phone"></i> ${station.phone}
                            </a>
                        </div>
                    `;
                });
            }
        });
    }
}

// Get department name in selected language
function getDepartmentName(dept, lang) {
    const names = {
        water: { en: 'Water Supply', hi: 'जल आपूर्ति', mr: 'पाणी पुरवठा' },
        electricity: { en: 'Electricity', hi: 'बिजली', mr: 'वीज' },
        sanitation: { en: 'Sanitation', hi: 'स्वच्छता', mr: 'स्वच्छता' },
        road: { en: 'Roads & Traffic', hi: 'सड़क और यातायात', mr: 'रस्ते आणि वाहतूक' }
    };
    return names[dept][lang];
}

// Get department icon
function getDepartmentIcon(dept) {
    const icons = {
        water: 'fa-tint',
        electricity: 'fa-bolt',
        sanitation: 'fa-recycle',
        road: 'fa-road'
    };
    return icons[dept];
}

// Switch emergency tab
function switchEmergencyTab(type) {
    // Update active tab
    const tabs = document.querySelectorAll('.emergency-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[onclick="switchEmergencyTab('${type}')"]`).classList.add('active');
    
    // Load content
    loadEmergencyContacts(type);
}

// Initialize emergency widget on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check saved state
    const savedState = localStorage.getItem('emergencyWidgetState');
    const widget = document.getElementById('emergencyWidget');
    
    if (widget) {
        if (savedState === 'hidden') {
            widget.classList.add('hidden');
        } else if (savedState === 'expanded') {
            widget.classList.remove('collapsed');
            widget.classList.add('expanded');
        } else {
            widget.classList.add('collapsed');
        }
        
        // Load default content
        loadEmergencyContacts('national');
    }
});
