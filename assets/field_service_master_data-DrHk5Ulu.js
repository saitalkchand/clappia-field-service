var e=`{
  "sourceWorkbook": "Copy of PM Team - Snags  Consumables - Jay.xlsx",
  "purpose": "Master/reference data extracted from the workbook for a Field Service Management application. CO transactional records are not exported here except for distinct dropdown values.",
  "masters": {
    "snagCategories": [
      "ACCESS",
      "AIR CONDITIONING",
      "AWL",
      "BATTERY",
      "CIVIL",
      "DC SYSTEM",
      "EXTERNAL ALARMS",
      "EXTRA MATERIALS",
      "FINDINGS",
      "FIRE SYSTEMS",
      "HYBRID",
      "MDB",
      "NO SNAG",
      "OTHERS",
      "POWER METER",
      "SECURITY",
      "SHELTER",
      "TI",
      "VANDALISM"
    ],
    "snagDescriptionLists": [
      {
        "code": "FIRE_SYSTEMS",
        "label": "Fire Systems",
        "options": [
          "FIRE ALARM BATTERY FAULTY",
          "FIRE ALARM CONTROL PANEL FAULTY",
          "FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
          "FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
          "FIRE BREAK GLASS DAMAGED",
          "FIRE EXTINGUISHER EMPTY/MISSING",
          "FIRE EXTINGUISHER EXPIRED",
          "FIRE SOUNDER FAULTY",
          "FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
          "FIRE SYSTEMS - OTHERS",
          "FM200"
        ]
      },
      {
        "code": "CIVIL",
        "label": "Civil",
        "options": [
          "BOUNDARY WALL DAMAGED",
          "BOUNDARY WALL PAINT WORK",
          "CABLE TRAY DAMAGED",
          "CIVIL - OTHERS",
          "DU LOGO",
          "GENSET CANOPY NEEDS REPAIRING",
          "GROUND LEVELING",
          "GUIDE WIRE DAMAGED",
          "MAIN GATE FOUNDATION AND STOPPER NEED REPAIRING",
          "MAIN GATE IS RUSTED AND NEEDS REPAINTING",
          "MAIN GATE LOCK, HINGES, AND ALIGNMENT NEED REPAIRING",
          "RRU NEEDS REPAIRING",
          "SAFETY ROPE DAMAGED",
          "SHELTER BASE NEEDS REPAIRING",
          "SHELTER FLOOR NEEDS REPAIRING",
          "SHELTER PADLOCK HOOK IS CUT",
          "SHELTER ROOF REPAIR",
          "SHELTER ROOF WATERPROOFING",
          "SHELTER STEP NEEDS REPAIRING",
          "SHELTER SUNSHADE FOUNDATION NEEDS REPAIRING",
          "SHELTER WALL NEEDS REPAINTING",
          "TOWER FOUNDATION PAINT IS EXFOLIATED",
          "TOWER STRUCTURE PAINT IS EXFOLIATED"
        ]
      },
      {
        "code": "AIR_CONDITIONING",
        "label": "Air Conditioning",
        "options": [
          "AC CAPACITOR FAULTY",
          "AC COMPRESSOR  FAULTY",
          "AC CONTACTOR FAULTY",
          "AC FAN FAULTY",
          "AC FILTER REPLACED",
          "AC GAS REFILLING",
          "AC LEAKAGE",
          "AC NOT COOLING",
          "AC RELAY FAULTY",
          "AC UNIT BACK COVER INSULATION",
          "AC UNIT BLOCKED",
          "AIR CONDITIONING - OTHERS",
          "ALARM ISSUE",
          "CONTROL PANEL FAULTY",
          "FILTER DRIER FAULTY",
          "ICE FORMATION",
          "INDOOR AC BLOWER MOTOR FAULTY",
          "LAC SWITCH FAULTY",
          "OUTDOOR AC CONDENSER MOTOR FAULTY",
          "SPARE MISSING"
        ]
      },
      {
        "code": "NO_SNAG",
        "label": "No Snag",
        "options": [
          "NO SNAGS ON SITE"
        ]
      },
      {
        "code": "DC_SYSTEM",
        "label": "Dc System",
        "options": [
          "ADDITIONAL RECTIFIER MODULE",
          "AIR FILTER DAMAGED",
          "CABLING NOT ROUTED PROPERLY",
          "CONTROL PANEL DISPLAY FAULTY",
          "DC SYSTEM - OTHERS",
          "DC SYSTEM - SURGE ARRESTOR FAULTY",
          "DC SYSTEM DOOR SENSOR FAULTY",
          "FAN FAULTY",
          "RECTIFIER CIRCUIT BREAKER FAULTY",
          "RECTIFIER DOOR PANEL BROKEN",
          "RECTIFIER MODULE FAULTY"
        ]
      },
      {
        "code": "ACCESS",
        "label": "Access",
        "options": [
          "REQUIRES PERMIT/ EMAILL APPROVAL",
          "DISMANTLED SITE",
          "BUILDING MANAGEMENT NOT ALLOWING",
          "ETISALAT SMART LOCK REQ'T",
          "ROAD DAMAGED/4X4 REQUIREMENT",
          "ACCESS - OTHERS"
        ]
      },
      {
        "code": "MDB",
        "label": "Mdb",
        "options": [
          "SURGE ARRESTOR FAULTY",
          "RELAY FAULTY",
          "CIRCUIT BREAKER FAULTY",
          "LABELING MISSING",
          "AC POWER CABLE",
          "GENERATOR POWER CABLE",
          "MDB - OTHERS"
        ]
      },
      {
        "code": "SHELTER",
        "label": "Shelter",
        "options": [
          "SOCKET FAULTY",
          "INTERNAL LIGHTING BULB FAULTY",
          "EXTERNAL LIGHTING BULB FAULTY",
          "SITE ID DAMAGED",
          "DOOR SENSOR FAULTY",
          "SHELTER - OTHERS"
        ]
      },
      {
        "code": "AWL",
        "label": "Awl",
        "options": [
          "AWL CONTROL PANEL FAULTY",
          "AWL BULB FAULTY",
          "AWL PHOTOCELL FAULTY",
          "AWL CABLING DAMAGED",
          "AWL - OTHERS"
        ]
      },
      {
        "code": "EXTRA_MATERIALS",
        "label": "Extra Materials",
        "options": [
          "EM MATERIALS",
          "TI MATERIALS",
          "FIXED MATERIALS",
          "BUILDING EXTRA MATERIALS",
          "GENERATOR IDLE",
          "FUEL TANK IDLE",
          "EXTRA MATERIALS - OTHERS"
        ]
      },
      {
        "code": "TI",
        "label": "Ti",
        "options": [
          "EQUIPMENT CONNECTED TO THE AC SOCKET",
          "EQUIPMENT DOOR CANNOT BE CLOSED",
          "EQUIPMENT NOT INSTALLED AS PER STANDARD",
          "LABELLING MISSING",
          "TI - OTHERS"
        ]
      },
      {
        "code": "OTHERS",
        "label": "Others",
        "options": [
          "GARBAGE",
          "PLANTATION",
          "HAZARDS",
          "PEST CONTROL",
          "OTHERS"
        ]
      },
      {
        "code": "EXTERNAL_ALARMS",
        "label": "External Alarms",
        "options": [
          "NOT WORKING",
          "CABLES NOT ROUTED PROPERLY",
          "LOOPED ALARMS",
          "EXTERNAL ALARMS - OTHERS"
        ]
      },
      {
        "code": "POWER_METER",
        "label": "Power Meter",
        "options": [
          "POWER METER NOT WORKING",
          "POWER METER CABINET DAMAGED",
          "POWER METER CABLES ARE DAMANGED",
          "POWER METER NOT ACCESSIBLE",
          "POWER METER - OTHERS"
        ]
      },
      {
        "code": "FINDINGS",
        "label": "Findings",
        "options": [
          "BTS COOLING FAN FAULTY",
          "BTS FILTER DAMAGE/MISSING",
          "CABLE ROUTING IS NOT PER STANDARD",
          "EQUIPMENT UNIT BLOCKED",
          "FINDINGS - OTHERS",
          "POWER REDUNDANCY NOT AVAILABLE"
        ]
      },
      {
        "code": "VANDALISM",
        "label": "Vandalism",
        "options": [
          "GROUNDING MISSING",
          "EQUIPMENT MISSING",
          "EQUIPMENT/STRUCTURE DAMAGED",
          "VANDALISM - OTHERS"
        ]
      },
      {
        "code": "HYBRID",
        "label": "Hybrid",
        "options": [
          "BATTERY FAULTY",
          "BATTERY OFFLINE",
          "BATTERY SHELTER AC FAULTY",
          "DAMAGED CABLES",
          "EM MANAGER DISPLAY FAULTY",
          "FUEL SENSOR FAULTY",
          "HYBRID - OTHERS",
          "HYBRID AIRCON FAULTY",
          "P21 INVERTER FAULTY"
        ]
      },
      {
        "code": "SECURITY",
        "label": "Security",
        "options": [
          "EKMS MALFUNCTION",
          "PADLOCK BROKEN",
          "PADLOCK NOT WORKING",
          "SECURITY - OTHERS"
        ]
      },
      {
        "code": "BATTERY",
        "label": "Battery",
        "options": [
          "AGED BATTERY",
          "BATTERY FAULTY",
          "BATTERY MISSING",
          "LOW CAPACITY",
          "TEMPERATURE SENSOR",
          "WEAK BATTERY"
        ]
      },
      {
        "code": "Area\\\\region",
        "label": "Area\\\\Region",
        "options": [
          "DXB",
          "NE",
          "AUH",
          "AAN",
          "WR",
          "2000-01-01T00:00:00"
        ]
      },
      {
        "code": "SITE ID\\\\Location",
        "label": "Site Id\\\\Location",
        "options": []
      },
      {
        "code": "Site \\\\Room Type",
        "label": "Site \\\\Room Type",
        "options": [
          "RTS",
          "RTR",
          "RTO",
          "RDU",
          "IBS",
          "GRD",
          "GFS",
          "GFR",
          "GFO",
          "COW"
        ]
      },
      {
        "code": "Class Type  -Mobile  (updated)",
        "label": "Class Type  -Mobile  (Updated)",
        "options": [
          "CLASS A",
          "CLASS B",
          "CLASS C"
        ]
      },
      {
        "code": "TARGET WK DATE OF PM",
        "label": "Target Wk Date Of Pm",
        "options": []
      },
      {
        "code": "Level",
        "label": "Level",
        "options": []
      },
      {
        "code": "DATE DONE\\\\Achieved",
        "label": "Date Done\\\\Achieved",
        "options": []
      },
      {
        "code": "SNAG Classification",
        "label": "Snag Classification",
        "options": []
      },
      {
        "code": "SNAGS",
        "label": "Snags",
        "options": []
      },
      {
        "code": "REMARKS",
        "label": "Remarks",
        "options": []
      },
      {
        "code": "Snag Severity",
        "label": "Snag Severity",
        "options": [
          "MAJOR",
          "MINOR",
          "CRITICAL",
          "NA"
        ]
      },
      {
        "code": "Snags Reference No.",
        "label": "Snags Reference No.",
        "options": []
      },
      {
        "code": "SNAG Status",
        "label": "Snag Status",
        "options": [
          "OPEN",
          "CLOSED",
          "NA"
        ]
      },
      {
        "code": "Progress/Update",
        "label": "Progress/Update",
        "options": []
      },
      {
        "code": "Timeline",
        "label": "Timeline",
        "options": []
      },
      {
        "code": "action Owner",
        "label": "Action Owner",
        "options": [
          "HAYAT",
          "DU",
          "ON HOLD",
          "THIRD PARTY"
        ]
      },
      {
        "code": "Fire Extinguisher / Fire supression system",
        "label": "Fire Extinguisher / Fire Supression System",
        "options": []
      },
      {
        "code": "Supervisors",
        "label": "Supervisors",
        "options": [
          "Asmatullah Tahir Muhammad",
          "Basit Khan",
          "Faheem Abdullah Muhammad Abdullah",
          "Ghaias Uddin Babar",
          "Girish Dongra Kotharkar",
          "Hansaka Chathuranga",
          "Hari Krishan Paras Ram",
          "Jagdish Kumar Veer Chand",
          "Jay Puzon Tadina",
          "Kanwaljit Singh",
          "Manoj Kumar Baranwal",
          "Mohammad Asif",
          "Mohandass Paulraj",
          "Mohsinuddin Mohammed",
          "Muhammad Altaf Qureshi",
          "Muhammad Noman Ata Ullah",
          "Muhammad Noman Parvez Akhtar",
          "Muhammad Sibtain Alam",
          "Muhammad Sultan Safdar Hussain",
          "Naseef Abdurahman",
          "Naveen Chacko",
          "Nitin Kumar Kanwar Pal Singh",
          "Prabhat Kumar Suresh Prasad",
          "Raja Gurusamy",
          "Sachin George Varghese",
          "Vishnumon Thyagarajan",
          "Wissam Anwar Touma",
          "Zafaran Zulfiqar"
        ]
      },
      {
        "code": "Meter Reading",
        "label": "Meter Reading",
        "options": []
      },
      {
        "code": "BATTERY Status\\\\ Mobile",
        "label": "Battery Status\\\\ Mobile",
        "options": []
      },
      {
        "code": "Materials Used",
        "label": "Materials Used",
        "options": []
      },
      {
        "code": "NO",
        "label": "No",
        "options": [
          "ENABLED",
          "DISABLED",
          "DONE",
          "NOT DONE",
          "CHECKED/OKAY",
          "CHECKED/NOT OKAY"
        ]
      },
      {
        "code": "ABB-24VDC Relay",
        "label": "Abb-24Vdc Relay",
        "options": [
          "ABB-3 Pole Contactor A40-30-10",
          "ABB-4 Pole Contactor EBS 24-40",
          "ABB-4 Pole Contactor EBS 40-30",
          "ABB-Contactor ESB 40-40+",
          "ABB-DC Transformer (ABB AC Control panel)",
          "AC Alarm Card-Bard",
          "AC Control Panel-Bard (MC Series)",
          "AC Control Panel-ZNDKOOL",
          "AC Controller Board-Bard",
          "AC filter-Bard 3 ton",
          "AC filter-Bard 5 ton",
          "AC filter-Cooline 3 ton",
          "AC filter-Cooline 5 ton",
          "AC filter-Liebert 3 ton",
          "AC filter-Liebert 5 ton",
          "AC Insulation sheet",
          "AC Surge Arrestor",
          "Acrylic sheet",
          "Alarm Cable-LAN 20mtr Cat6",
          "AWL card-Tech15",
          "AWL card-Tech34",
          "AWL card-Tech42/45",
          "AWL Transformer 12V",
          "AWL Transformer 24V",
          "AWL Transformer 48V",
          "AWL-LED 12V",
          "AWL-LED 24V",
          "AWL-LED 48V",
          "AWL-Photo Cell",
          "Ballast-36 Watts",
          "Ballast-Electronic 2x36 watts",
          "Battery (AC Remote)-AAA",
          "Bison Kit Glue",
          "Blower Relay",
          "Cable Tie",
          "Capacitor-10uf",
          "Capacitor-2uf",
          "Capacitor-45uf",
          "Capacitor-50uf",
          "Capacitor-5uf",
          "Capacitor-60uf 2 pole",
          "Chain",
          "Condenser Fan (Bard/Liebert)",
          "Condenser Fan (Cooline)",
          "Contactor-2pole 220V",
          "Contactor-2pole 24V",
          "Contactor-3pole 220V",
          "Contactor-3pole 24V",
          "Cotton Rags",
          "Door Closer",
          "Door sensors (magnetic)",
          "Du Sticker",
          "Dusting brush",
          "External LED",
          "FACP 2 Zone Conventional (Gent)",
          "FACP 2 Zone Conventional (Shield)",
          "FACP Battery-12V 1.2AH",
          "FACP Battery-12V 2.1/2.2AH",
          "FACP Battery-12V 4.0/5.0AH",
          "FACP Battery-12V 7.0AH",
          "FE New-CO2",
          "FE New-Dry Powder",
          "FE Refilled-CO2 2/2.5KG",
          "FE Refilled-CO2 4.5Kg",
          "FE Refilled-Dry Powder 5kg",
          "FE Refilled-Dry Powder 6kg",
          "FE Safety Seal",
          "FE Sticker",
          "Filter drier 1/2 brazing type",
          "Filter drier 1/4 thread type",
          "Filter drier 3/8 brazing type",
          "Fire Alarm Sounder",
          "Fire Break Glass",
          "Flexible wire-1.5mm 3Core",
          "Flexible wire-1.5mm 4Core",
          "Flexible wire-2.5mm 3Core",
          "Flexible wire-2.5mm 4Core",
          "Garbage bag",
          "Gas-R22",
          "Gas-R407",
          "Gas-R-410",
          "Grease",
          "Hacksaw blade",
          "Heat detector",
          "Hose PIPE for CO2 FE",
          "Hose PIPE for DP FE",
          "Labeling Printer Cartridge 12mm",
          "LED Indicator Lamp (Red/Yellow/Blue/Green)",
          "MC3000 Control Panel Full set",
          "Padlock-B4",
          "Padlock-B6",
          "Padlock-B7",
          "Padlock-B8",
          "Padlock-B9",
          "Padlock-B10",
          "Padlock-Black Master",
          "Padlock-DXB Du leading",
          "Padlock-NE Du leading",
          "PM Checklist",
          "PS Module-APM30",
          "PS Module-Delta Qlua 11",
          "PS Module-Delta Zlua 1",
          "PS Module-Eltek",
          "PS Module-Power One",
          "PS Module-Vertiv",
          "Rectifier SPD",
          "Relay-3 Phase Monitoring (Bard)",
          "Relay-Bard Blower Control",
          "Relay-Control 14pin 240V",
          "Relay-Mains Failure",
          "Relay-Phase Monitor",
          "Relay-Timer (Bard)",
          "Relay-Timer (Liebert)",
          "Relay-Under Voltage",
          "safety gloves (Rubber)",
          "Self-driven screw",
          "Shelter Outside Bulb (Pin type)",
          "Shelter Outside Bulb (Screw type)",
          "Shelter Tubelight-18W",
          "Shelter Tubelight-36W",
          "Shelter Tubelight-9W",
          "Side Grill-Bard 3 ton",
          "Silicon Tube-Clear",
          "Silicon Tube-White",
          "Smoke detector",
          "Socket-Double (Indoor)",
          "Socket-Single (Outdoor)",
          "Spray-Black paint",
          "Spray-Cleaning (Mr. Muscle)",
          "Spray-CRC (Contact Cleaner)",
          "Spray-Foam",
          "Spray-Smoke",
          "Spray-White paint",
          "Switch-High pressure",
          "Switch-LAC(Low Ambient Control)",
          "Switch-Weatherproof",
          "TAPE-insulation",
          "TAPE-Teflon",
          "Transformer 220V to 24V",
          "Tubelight Starter-4-65W (S10)",
          "Tubelight-Full Set (18W)",
          "Tubelight-Full Set (2x36W)",
          "Vertiv Air Filter",
          "WD40",
          "Weather proofing (RF connectors)"
        ]
      }
    ],
    "snagSeverityRules": [
      {
        "snagClassification": "NO SNAG",
        "snagDescription": "NO SNAGS ON SITE",
        "severityBySiteClass": {
          "CLASS A": "NA",
          "CLASS B": "NA",
          "CLASS C": "NA"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EXPIRED",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EMPTY/MISSING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM CONTROL PANEL FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM BATTERY FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE BREAK GLASS DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SOUNDER FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FM200",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SYSTEMS - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF REPAIR",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF WATERPROOFING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER PADLOCK HOOK IS CUT",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER NEEDS REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "MAIN GATE FOUNDATION AND STOPPER NEED REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "MAIN GATE IS RUSTED AND NEEDS REPAINTING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "MAIN GATE LOCK, HINGES, AND ALIGNMENT NEED REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL PAINT WORK",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "TOWER FOUNDATION PAINT IS EXFOLIATED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "TOWER STRUCTURE PAINT IS EXFOLIATED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SAFETY ROPE DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "GUIDE WIRE DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "DU LOGO",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "GENSET CANOPY NEEDS REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER BASE NEEDS REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER FLOOR NEEDS REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER SUNSHADE FOUNDATION NEEDS REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER STEP NEEDS REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER WALL NEEDS REPAINTING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "RRU NEEDS REPAIRING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "GROUND LEVELING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "CABLE TRAY DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "CIVIL",
        "snagDescription": "CIVIL - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FILTER REPLACED",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "INDOOR AC BLOWER MOTOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "OUTDOOR AC CONDENSER MOTOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC COMPRESSOR  FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC LEAKAGE",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC RELAY FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CONTACTOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC GAS REFILLING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC NOT COOLING",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FAN FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CAPACITOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ICE FORMATION",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "CONTROL PANEL FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "CRITICAL",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ALARM ISSUE",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "SPARE MISSING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC UNIT BACK COVER INSULATION",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "LAC SWITCH FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "FILTER DRIER FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AIR CONDITIONING - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC UNIT BLOCKED",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER MODULE FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CONTROL PANEL DISPLAY FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER CIRCUIT BREAKER FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER DOOR PANEL BROKEN",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "FAN FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "AIR FILTER DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CABLING NOT ROUTED PROPERLY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM DOOR SENSOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - SURGE ARRESTOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "DC SYSTEM",
        "snagDescription": "ADDITIONAL RECTIFIER MODULE",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "ACCESS",
        "snagDescription": "REQUIRES PERMIT/ EMAILL APPROVAL",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "ACCESS",
        "snagDescription": "DISMANTLED SITE",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "ACCESS",
        "snagDescription": "BUILDING MANAGEMENT NOT ALLOWING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "ACCESS",
        "snagDescription": "ETISALAT SMART LOCK REQ'T",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "ACCESS",
        "snagDescription": "ROAD DAMAGED/4X4 REQUIREMENT",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "ACCESS",
        "snagDescription": "ACCESS - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "MDB",
        "snagDescription": "SURGE ARRESTOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "MDB",
        "snagDescription": "RELAY FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "MDB",
        "snagDescription": "CIRCUIT BREAKER FAULTY",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "MDB",
        "snagDescription": "LABELING MISSING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "MDB",
        "snagDescription": "AC POWER CABLE",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "MDB",
        "snagDescription": "GENERATOR POWER CABLE",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "MDB",
        "snagDescription": "MDB - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SHELTER",
        "snagDescription": "SOCKET FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SHELTER",
        "snagDescription": "INTERNAL LIGHTING BULB FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SHELTER",
        "snagDescription": "EXTERNAL LIGHTING BULB FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SHELTER",
        "snagDescription": "SITE ID DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SHELTER",
        "snagDescription": "DOOR SENSOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SHELTER",
        "snagDescription": "SHELTER - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AWL",
        "snagDescription": "AWL CONTROL PANEL FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AWL",
        "snagDescription": "AWL BULB FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AWL",
        "snagDescription": "AWL PHOTOCELL FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AWL",
        "snagDescription": "AWL CABLING DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "AWL",
        "snagDescription": "AWL - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EM MATERIALS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "TI MATERIALS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FIXED MATERIALS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "BUILDING EXTRA MATERIALS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "GENERATOR IDLE",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FUEL TANK IDLE",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EXTRA MATERIALS - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "TI",
        "snagDescription": "LABELLING MISSING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT CONNECTED TO THE AC SOCKET",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT DOOR CANNOT BE CLOSED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT NOT INSTALLED AS PER STANDARD",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "TI",
        "snagDescription": "TI - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "OTHERS",
        "snagDescription": "GARBAGE",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "OTHERS",
        "snagDescription": "PLANTATION",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "OTHERS",
        "snagDescription": "HAZARDS",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "OTHERS",
        "snagDescription": "PEST CONTROL",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "OTHERS",
        "snagDescription": "OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "NOT WORKING",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "CABLES NOT ROUTED PROPERLY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "LOOPED ALARMS",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "EXTERNAL ALARMS - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT WORKING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABINET DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABLES ARE DAMANGED",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT ACCESSIBLE",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FINDINGS",
        "snagDescription": "BTS COOLING FAN FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FINDINGS",
        "snagDescription": "EQUIPMENT UNIT BLOCKED",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FINDINGS",
        "snagDescription": "BTS FILTER DAMAGE/MISSING",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FINDINGS",
        "snagDescription": "CABLE ROUTING IS NOT PER STANDARD",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FINDINGS",
        "snagDescription": "POWER REDUNDANCY NOT AVAILABLE",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "FINDINGS",
        "snagDescription": "FINDINGS - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "VANDALISM",
        "snagDescription": "GROUNDING MISSING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT MISSING",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT/STRUCTURE DAMAGED",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "VANDALISM",
        "snagDescription": "VANDALISM - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "P21 INVERTER FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY OFFLINE",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "FUEL SENSOR FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "EM MANAGER DISPLAY FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY SHELTER AC FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID AIRCON FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "DAMAGED CABLES",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      },
      {
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK NOT WORKING",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SECURITY",
        "snagDescription": "EKMS MALFUNCTION",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK BROKEN",
        "severityBySiteClass": {
          "CLASS A": "CRITICAL",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "SECURITY",
        "snagDescription": "SECURITY - OTHERS",
        "severityBySiteClass": {
          "CLASS A": "MINOR",
          "CLASS B": "MINOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "BATTERY",
        "snagDescription": "BATTERY FAULTY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "BATTERY",
        "snagDescription": "BATTERY MISSING",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "BATTERY",
        "snagDescription": "LOW CAPACITY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "BATTERY",
        "snagDescription": "WEAK BATTERY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "BATTERY",
        "snagDescription": "AGED BATTERY",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MINOR"
        }
      },
      {
        "snagClassification": "BATTERY",
        "snagDescription": "TEMPERATURE SENSOR",
        "severityBySiteClass": {
          "CLASS A": "MAJOR",
          "CLASS B": "MAJOR",
          "CLASS C": "MAJOR"
        }
      }
    ],
    "snagClassificationMappings": [
      {
        "mappingKey": "Class A*NO SNAG*NO SNAGS ON SITE",
        "snagClassification": "NO SNAG",
        "snagDescription": "NO SNAGS ON SITE",
        "severity": "NA",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE EXTINGUISHER EXPIRED",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EXPIRED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE EXTINGUISHER EMPTY/MISSING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EMPTY/MISSING",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE ALARM CONTROL PANEL FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM CONTROL PANEL FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE ALARM BATTERY FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM BATTERY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE BREAK GLASS DAMAGED",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE BREAK GLASS DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE SOUNDER FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SOUNDER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*WIRING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "WIRING",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FIRE SYSTEMS*FIRE SYSTEMS - OTHERS",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SYSTEMS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*SHELTER ROOF REPAIR",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF REPAIR",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*SHELTER ROOF WATERPROOFING",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF WATERPROOFING",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*SHELTER PADLOCK HOOK IS CUT",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER PADLOCK HOOK IS CUT",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*SHELTER NEEDS REPAIRING",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER NEEDS REPAIRING",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*MAIN GATE SNAG",
        "snagClassification": "CIVIL",
        "snagDescription": "MAIN GATE SNAG",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*BOUNDARY WALL DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*BOUNDARY WALL PAINT WORK",
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL PAINT WORK",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*TOWER PAINT EXFOLIATED",
        "snagClassification": "CIVIL",
        "snagDescription": "TOWER PAINT EXFOLIATED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*SAFETY ROPE DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "SAFETY ROPE DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*GUIDE WIRE DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "GUIDE WIRE DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*ROOM DOOR BROKEN",
        "snagClassification": "CIVIL",
        "snagDescription": "ROOM DOOR BROKEN",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*GROUND LEVELING",
        "snagClassification": "CIVIL",
        "snagDescription": "GROUND LEVELING",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*CABLE TRAY DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "CABLE TRAY DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*CIVIL*CIVIL - OTHERS",
        "snagClassification": "CIVIL",
        "snagDescription": "CIVIL - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC FILTER REPLACED",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FILTER REPLACED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*INDOOR AC BLOWER MOTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "INDOOR AC BLOWER MOTOR FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*OUTDOOR AC CONDENSER MOTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "OUTDOOR AC CONDENSER MOTOR FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC COMPRESSOR  FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC COMPRESSOR  FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC LEAKAGE",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC LEAKAGE",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC RELAY FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC RELAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC CONTACTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CONTACTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC GAS REFILLING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC GAS REFILLING",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC NOT COOLING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC NOT COOLING",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC FAN FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FAN FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC CAPACITOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CAPACITOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*ICE FORMATION",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ICE FORMATION",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*CONTROL PANEL FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "CONTROL PANEL FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*ALARM ISSUE",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ALARM ISSUE",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*SPARE MISSING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "SPARE MISSING",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AC UNIT BACK COVER INSULATION",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC UNIT BACK COVER INSULATION",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*LAC SWITCH FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "LAC SWITCH FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*FILTER DRIER FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "FILTER DRIER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AIR CONDITIONING*AIR CONDITIONING - OTHERS",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AIR CONDITIONING - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*RECTIFIER MODULE FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER MODULE FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*CONTROL PANEL DISPLAY FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CONTROL PANEL DISPLAY FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*RECTIFIER CIRCUIT BREAKER FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER CIRCUIT BREAKER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*FAULTY BATTERY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "FAULTY BATTERY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*RECTIFIER DOOR PANEL BROKEN",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER DOOR PANEL BROKEN",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*FAN FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "FAN FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*AIR FILTER DAMAGED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "AIR FILTER DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*CABLING NOT ROUTED PROPERLY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CABLING NOT ROUTED PROPERLY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*NO BBU CABINET INSTALLED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "NO BBU CABINET INSTALLED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*MISSING BATTERY - BATTERY THEFT",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "MISSING BATTERY - BATTERY THEFT",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*MISSING BATTERY - DISMANTLED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "MISSING BATTERY - DISMANTLED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*DC SYSTEM DOOR SENSOR FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM DOOR SENSOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*DC SYSTEM - OTHERS",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*ADDITIONAL STRING REQD",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "ADDITIONAL STRING REQD",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*DC SYSTEM - SURGE ARRESTOR FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - SURGE ARRESTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*DC SYSTEM*RECTIFIER MODULE",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER MODULE",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*RECTIFIER MODULE",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER MODULE",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*RECTIFIER MODULE",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER MODULE",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class A*ACCESS*REQUIRES PERMIT/ EMAILL APPROVAL",
        "snagClassification": "ACCESS",
        "snagDescription": "REQUIRES PERMIT/ EMAILL APPROVAL",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*ACCESS*DISMANTLED SITE",
        "snagClassification": "ACCESS",
        "snagDescription": "DISMANTLED SITE",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*ACCESS*BUILDING MANAGEMENT NOT ALLOWING",
        "snagClassification": "ACCESS",
        "snagDescription": "BUILDING MANAGEMENT NOT ALLOWING",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*ACCESS*ETISALAT SMART LOCK REQ'T",
        "snagClassification": "ACCESS",
        "snagDescription": "ETISALAT SMART LOCK REQ'T",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*ACCESS*ROAD DAMAGED/4X4 REQUIREMENT",
        "snagClassification": "ACCESS",
        "snagDescription": "ROAD DAMAGED/4X4 REQUIREMENT",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*ACCESS*ACCESS - OTHERS",
        "snagClassification": "ACCESS",
        "snagDescription": "ACCESS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*MDB*SURGE ARRESTOR FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "SURGE ARRESTOR FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*MDB*RELAY FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "RELAY FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*MDB*CIRCUIT BREAKER FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "CIRCUIT BREAKER FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*MDB*LABELING MISSING",
        "snagClassification": "MDB",
        "snagDescription": "LABELING MISSING",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*MDB*AC POWER CABLE",
        "snagClassification": "MDB",
        "snagDescription": "AC POWER CABLE",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*MDB*GENERATOR POWER CABLE",
        "snagClassification": "MDB",
        "snagDescription": "GENERATOR POWER CABLE",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*MDB*MDB - OTHERS",
        "snagClassification": "MDB",
        "snagDescription": "MDB - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SHELTER*SOCKET FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "SOCKET FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SHELTER*INTERNAL LIGHTING BULB FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "INTERNAL LIGHTING BULB FAULTY",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SHELTER*EXTERNAL LIGHTING BULB FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "EXTERNAL LIGHTING BULB FAULTY",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SHELTER*SITE ID DAMAGED",
        "snagClassification": "SHELTER",
        "snagDescription": "SITE ID DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SHELTER*DOOR SENSOR FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "DOOR SENSOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SHELTER*SHELTER - OTHERS",
        "snagClassification": "SHELTER",
        "snagDescription": "SHELTER - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AWL*AWL CONTROL PANEL FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL CONTROL PANEL FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AWL*AWL BULB FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL BULB FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AWL*AWL PHOTOCELL FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL PHOTOCELL FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AWL*AWL CABLING DAMAGED",
        "snagClassification": "AWL",
        "snagDescription": "AWL CABLING DAMAGED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*AWL*AWL - OTHERS",
        "snagClassification": "AWL",
        "snagDescription": "AWL - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTRA MATERIALS*EM MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EM MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTRA MATERIALS*TI MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "TI MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTRA MATERIALS*FIXED MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FIXED MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTRA MATERIALS*BUILDING EXTRA MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "BUILDING EXTRA MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTRA MATERIALS*GENERATOR IDLE",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "GENERATOR IDLE",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTRA MATERIALS*FUEL TANK IDLE",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FUEL TANK IDLE",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTRA MATERIALS*EXTRA MATERIALS - OTHERS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EXTRA MATERIALS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*LABELLING MISSING",
        "snagClassification": "TI",
        "snagDescription": "LABELLING MISSING",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*POWER REDUNDANCY NOT AVAILABLE",
        "snagClassification": "TI",
        "snagDescription": "POWER REDUNDANCY NOT AVAILABLE",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*CABLE ROUTING IS NOT PER STANDARD",
        "snagClassification": "TI",
        "snagDescription": "CABLE ROUTING IS NOT PER STANDARD",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*EQUIPMENT CONNECTED TO THE AC SOCKET",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT CONNECTED TO THE AC SOCKET",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*EQUIPMENT DOOR CANNOT BE CLOSED",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT DOOR CANNOT BE CLOSED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*EQUIPMENT NOT INSTALLED AS PER STANDARD",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT NOT INSTALLED AS PER STANDARD",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*BTS COOLING FAN FAULTY",
        "snagClassification": "TI",
        "snagDescription": "BTS COOLING FAN FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*BTS FILTER DAMAGE/MISSING",
        "snagClassification": "TI",
        "snagDescription": "BTS FILTER DAMAGE/MISSING",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*TI*TI - OTHERS",
        "snagClassification": "TI",
        "snagDescription": "TI - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*OTHERS*GARBAGE",
        "snagClassification": "OTHERS",
        "snagDescription": "GARBAGE",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*OTHERS*PLANTATION",
        "snagClassification": "OTHERS",
        "snagDescription": "PLANTATION",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*OTHERS*HAZARDS",
        "snagClassification": "OTHERS",
        "snagDescription": "HAZARDS",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*OTHERS*PEST CONTROL",
        "snagClassification": "OTHERS",
        "snagDescription": "PEST CONTROL",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*OTHERS*OTHERS",
        "snagClassification": "OTHERS",
        "snagDescription": "OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTERNAL ALARMS*NOT WORKING",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "NOT WORKING",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTERNAL ALARMS*CABLES NOT ROUTED PROPERLY",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "CABLES NOT ROUTED PROPERLY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTERNAL ALARMS*LOOPED ALARMS",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "LOOPED ALARMS",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*EXTERNAL ALARMS*EXTERNAL ALARMS - OTHERS",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "EXTERNAL ALARMS - OTHERS",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*POWER METER*POWER METER NOT WORKING",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT WORKING",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*POWER METER*POWER METER CABINET DAMAGED",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABINET DAMAGED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*POWER METER*POWER METER CABLES ARE DAMANGED",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABLES ARE DAMANGED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*POWER METER*POWER METER NOT ACCESSIBLE",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT ACCESSIBLE",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*POWER METER*POWER METER - OTHERS",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FINDINGS*AC UNIT BLOCKED",
        "snagClassification": "FINDINGS",
        "snagDescription": "AC UNIT BLOCKED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FINDINGS*EQUIPMENT UNIT BLOCKED",
        "snagClassification": "FINDINGS",
        "snagDescription": "EQUIPMENT UNIT BLOCKED",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FINDINGS*EXTRA DG/ FUEL TANK",
        "snagClassification": "FINDINGS",
        "snagDescription": "EXTRA DG/ FUEL TANK",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FINDINGS*FUEL LEAKAGE",
        "snagClassification": "FINDINGS",
        "snagDescription": "FUEL LEAKAGE",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FINDINGS*NO BOUNDARY WALL/FENCE",
        "snagClassification": "FINDINGS",
        "snagDescription": "NO BOUNDARY WALL/FENCE",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*FINDINGS*FINDINGS - OTHERS",
        "snagClassification": "FINDINGS",
        "snagDescription": "FINDINGS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*VANDALISM*GROUNDING MISSING",
        "snagClassification": "VANDALISM",
        "snagDescription": "GROUNDING MISSING",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*VANDALISM*EQUIPMENT MISSING",
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT MISSING",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*VANDALISM*EQUIPMENT/STRUCTURE DAMAGED",
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT/STRUCTURE DAMAGED",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*VANDALISM*VANDALISM - OTHERS",
        "snagClassification": "VANDALISM",
        "snagDescription": "VANDALISM - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*P21 INVERTER FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "P21 INVERTER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*BATTERY FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*BATTERY OFFLINE",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY OFFLINE",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*FUEL SENSOR FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "FUEL SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*EM MANAGER DISPLAY FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "EM MANAGER DISPLAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*BATTERY SHELTER AC FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY SHELTER AC FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*HYBRID AIRCON FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID AIRCON FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*DAMAGED CABLES",
        "snagClassification": "HYBRID",
        "snagDescription": "DAMAGED CABLES",
        "severity": "MAJOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*HYBRID*HYBRID - OTHERS",
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SECURITY*PADLOCK NOT WORKING",
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK NOT WORKING",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SECURITY*EKMS MALFUNCTION",
        "snagClassification": "SECURITY",
        "snagDescription": "EKMS MALFUNCTION",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SECURITY*PADLOCK BROKEN",
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK BROKEN",
        "severity": "CRITICAL",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class A*SECURITY*SECURITY - OTHERS",
        "snagClassification": "SECURITY",
        "snagDescription": "SECURITY - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class A"
      },
      {
        "mappingKey": "Class B*NO SNAG*NO SNAGS ON SITE",
        "snagClassification": "NO SNAG",
        "snagDescription": "NO SNAGS ON SITE",
        "severity": "NA",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE EXTINGUISHER EXPIRED",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EXPIRED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE EXTINGUISHER EMPTY/MISSING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EMPTY/MISSING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE ALARM CONTROL PANEL FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM CONTROL PANEL FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE ALARM BATTERY FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM BATTERY FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE BREAK GLASS DAMAGED",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE BREAK GLASS DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE SOUNDER FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SOUNDER FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*WIRING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "WIRING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FIRE SYSTEMS*FIRE SYSTEMS - OTHERS",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SYSTEMS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*SHELTER ROOF REPAIR",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF REPAIR",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*SHELTER ROOF WATERPROOFING",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF WATERPROOFING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*SHELTER PADLOCK HOOK IS CUT",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER PADLOCK HOOK IS CUT",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*SHELTER NEEDS REPAIRING",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER NEEDS REPAIRING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*MAIN GATE SNAG",
        "snagClassification": "CIVIL",
        "snagDescription": "MAIN GATE SNAG",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*BOUNDARY WALL DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*BOUNDARY WALL PAINT WORK",
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL PAINT WORK",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*TOWER PAINT EXFOLIATED",
        "snagClassification": "CIVIL",
        "snagDescription": "TOWER PAINT EXFOLIATED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*SAFETY ROPE DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "SAFETY ROPE DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*GUIDE WIRE DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "GUIDE WIRE DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*ROOM DOOR BROKEN",
        "snagClassification": "CIVIL",
        "snagDescription": "ROOM DOOR BROKEN",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*GROUND LEVELING",
        "snagClassification": "CIVIL",
        "snagDescription": "GROUND LEVELING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*CABLE TRAY DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "CABLE TRAY DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*CIVIL*CIVIL - OTHERS",
        "snagClassification": "CIVIL",
        "snagDescription": "CIVIL - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC FILTER REPLACED",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FILTER REPLACED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*INDOOR AC BLOWER MOTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "INDOOR AC BLOWER MOTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*OUTDOOR AC CONDENSER MOTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "OUTDOOR AC CONDENSER MOTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC COMPRESSOR  FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC COMPRESSOR  FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC LEAKAGE",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC LEAKAGE",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC RELAY FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC RELAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC CONTACTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CONTACTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC GAS REFILLING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC GAS REFILLING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC NOT COOLING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC NOT COOLING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC FAN FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FAN FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC CAPACITOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CAPACITOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*ICE FORMATION",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ICE FORMATION",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*CONTROL PANEL FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "CONTROL PANEL FAULTY",
        "severity": "CRITICAL",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*ALARM ISSUE",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ALARM ISSUE",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*SPARE MISSING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "SPARE MISSING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AC UNIT BACK COVER INSULATION",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC UNIT BACK COVER INSULATION",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*LAC SWITCH FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "LAC SWITCH FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*FILTER DRIER FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "FILTER DRIER FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AIR CONDITIONING*AIR CONDITIONING - OTHERS",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AIR CONDITIONING - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*RECTIFIER MODULE FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER MODULE FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*CONTROL PANEL DISPLAY FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CONTROL PANEL DISPLAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*RECTIFIER CIRCUIT BREAKER FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER CIRCUIT BREAKER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*FAULTY BATTERY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "FAULTY BATTERY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*RECTIFIER DOOR PANEL BROKEN",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER DOOR PANEL BROKEN",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*FAN FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "FAN FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*AIR FILTER DAMAGED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "AIR FILTER DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*CABLING NOT ROUTED PROPERLY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CABLING NOT ROUTED PROPERLY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*NO BBU CABINET INSTALLED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "NO BBU CABINET INSTALLED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*MISSING BATTERY - BATTERY THEFT",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "MISSING BATTERY - BATTERY THEFT",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*MISSING BATTERY - DISMANTLED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "MISSING BATTERY - DISMANTLED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*DC SYSTEM DOOR SENSOR FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM DOOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*DC SYSTEM - OTHERS",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*ADDITIONAL STRING REQD",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "ADDITIONAL STRING REQD",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*DC SYSTEM*DC SYSTEM - SURGE ARRESTOR FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - SURGE ARRESTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*ACCESS*REQUIRES PERMIT/ EMAILL APPROVAL",
        "snagClassification": "ACCESS",
        "snagDescription": "REQUIRES PERMIT/ EMAILL APPROVAL",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*ACCESS*DISMANTLED SITE",
        "snagClassification": "ACCESS",
        "snagDescription": "DISMANTLED SITE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*ACCESS*BUILDING MANAGEMENT NOT ALLOWING",
        "snagClassification": "ACCESS",
        "snagDescription": "BUILDING MANAGEMENT NOT ALLOWING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*ACCESS*ETISALAT SMART LOCK REQ'T",
        "snagClassification": "ACCESS",
        "snagDescription": "ETISALAT SMART LOCK REQ'T",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*ACCESS*ROAD DAMAGED/4X4 REQUIREMENT",
        "snagClassification": "ACCESS",
        "snagDescription": "ROAD DAMAGED/4X4 REQUIREMENT",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*ACCESS*ACCESS - OTHERS",
        "snagClassification": "ACCESS",
        "snagDescription": "ACCESS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*MDB*SURGE ARRESTOR FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "SURGE ARRESTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*MDB*RELAY FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "RELAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*MDB*CIRCUIT BREAKER FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "CIRCUIT BREAKER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*MDB*LABELING MISSING",
        "snagClassification": "MDB",
        "snagDescription": "LABELING MISSING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*MDB*AC POWER CABLE",
        "snagClassification": "MDB",
        "snagDescription": "AC POWER CABLE",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*MDB*GENERATOR POWER CABLE",
        "snagClassification": "MDB",
        "snagDescription": "GENERATOR POWER CABLE",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*MDB*MDB - OTHERS",
        "snagClassification": "MDB",
        "snagDescription": "MDB - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SHELTER*SOCKET FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "SOCKET FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SHELTER*INTERNAL LIGHTING BULB FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "INTERNAL LIGHTING BULB FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SHELTER*EXTERNAL LIGHTING BULB FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "EXTERNAL LIGHTING BULB FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SHELTER*SITE ID DAMAGED",
        "snagClassification": "SHELTER",
        "snagDescription": "SITE ID DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SHELTER*DOOR SENSOR FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "DOOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SHELTER*SHELTER - OTHERS",
        "snagClassification": "SHELTER",
        "snagDescription": "SHELTER - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AWL*AWL CONTROL PANEL FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL CONTROL PANEL FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AWL*AWL BULB FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL BULB FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AWL*AWL PHOTOCELL FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL PHOTOCELL FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AWL*AWL CABLING DAMAGED",
        "snagClassification": "AWL",
        "snagDescription": "AWL CABLING DAMAGED",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*AWL*AWL - OTHERS",
        "snagClassification": "AWL",
        "snagDescription": "AWL - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTRA MATERIALS*EM MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EM MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTRA MATERIALS*TI MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "TI MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTRA MATERIALS*FIXED MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FIXED MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTRA MATERIALS*BUILDING EXTRA MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "BUILDING EXTRA MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTRA MATERIALS*GENERATOR IDLE",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "GENERATOR IDLE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTRA MATERIALS*FUEL TANK IDLE",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FUEL TANK IDLE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTRA MATERIALS*EXTRA MATERIALS - OTHERS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EXTRA MATERIALS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*LABELLING MISSING",
        "snagClassification": "TI",
        "snagDescription": "LABELLING MISSING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*POWER REDUNDANCY NOT AVAILABLE",
        "snagClassification": "TI",
        "snagDescription": "POWER REDUNDANCY NOT AVAILABLE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*CABLE ROUTING IS NOT PER STANDARD",
        "snagClassification": "TI",
        "snagDescription": "CABLE ROUTING IS NOT PER STANDARD",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*EQUIPMENT CONNECTED TO THE AC SOCKET",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT CONNECTED TO THE AC SOCKET",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*EQUIPMENT DOOR CANNOT BE CLOSED",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT DOOR CANNOT BE CLOSED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*EQUIPMENT NOT INSTALLED AS PER STANDARD",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT NOT INSTALLED AS PER STANDARD",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*BTS COOLING FAN FAULTY",
        "snagClassification": "TI",
        "snagDescription": "BTS COOLING FAN FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*BTS FILTER DAMAGE/MISSING",
        "snagClassification": "TI",
        "snagDescription": "BTS FILTER DAMAGE/MISSING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*TI*TI - OTHERS",
        "snagClassification": "TI",
        "snagDescription": "TI - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*OTHERS*GARBAGE",
        "snagClassification": "OTHERS",
        "snagDescription": "GARBAGE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*OTHERS*PLANTATION",
        "snagClassification": "OTHERS",
        "snagDescription": "PLANTATION",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*OTHERS*HAZARDS",
        "snagClassification": "OTHERS",
        "snagDescription": "HAZARDS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*OTHERS*PEST CONTROL",
        "snagClassification": "OTHERS",
        "snagDescription": "PEST CONTROL",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*OTHERS*OTHERS",
        "snagClassification": "OTHERS",
        "snagDescription": "OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTERNAL ALARMS*NOT WORKING",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "NOT WORKING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTERNAL ALARMS*CABLES NOT ROUTED PROPERLY",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "CABLES NOT ROUTED PROPERLY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTERNAL ALARMS*LOOPED ALARMS",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "LOOPED ALARMS",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*EXTERNAL ALARMS*EXTERNAL ALARMS - OTHERS",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "EXTERNAL ALARMS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*POWER METER*POWER METER NOT WORKING",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT WORKING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*POWER METER*POWER METER CABINET DAMAGED",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABINET DAMAGED",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*POWER METER*POWER METER CABLES ARE DAMANGED",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABLES ARE DAMANGED",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*POWER METER*POWER METER NOT ACCESSIBLE",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT ACCESSIBLE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*POWER METER*POWER METER - OTHERS",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FINDINGS*AC UNIT BLOCKED",
        "snagClassification": "FINDINGS",
        "snagDescription": "AC UNIT BLOCKED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FINDINGS*EQUIPMENT UNIT BLOCKED",
        "snagClassification": "FINDINGS",
        "snagDescription": "EQUIPMENT UNIT BLOCKED",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FINDINGS*EXTRA DG/ FUEL TANK",
        "snagClassification": "FINDINGS",
        "snagDescription": "EXTRA DG/ FUEL TANK",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FINDINGS*FUEL LEAKAGE",
        "snagClassification": "FINDINGS",
        "snagDescription": "FUEL LEAKAGE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FINDINGS*NO BOUNDARY WALL/FENCE",
        "snagClassification": "FINDINGS",
        "snagDescription": "NO BOUNDARY WALL/FENCE",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*FINDINGS*FINDINGS - OTHERS",
        "snagClassification": "FINDINGS",
        "snagDescription": "FINDINGS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*VANDALISM*GROUNDING MISSING",
        "snagClassification": "VANDALISM",
        "snagDescription": "GROUNDING MISSING",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*VANDALISM*EQUIPMENT MISSING",
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT MISSING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*VANDALISM*EQUIPMENT/STRUCTURE DAMAGED",
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT/STRUCTURE DAMAGED",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*VANDALISM*VANDALISM - OTHERS",
        "snagClassification": "VANDALISM",
        "snagDescription": "VANDALISM - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*P21 INVERTER FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "P21 INVERTER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*BATTERY FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*BATTERY OFFLINE",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY OFFLINE",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*FUEL SENSOR FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "FUEL SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*EM MANAGER DISPLAY FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "EM MANAGER DISPLAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*BATTERY SHELTER AC FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY SHELTER AC FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*HYBRID AIRCON FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID AIRCON FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*DAMAGED CABLES",
        "snagClassification": "HYBRID",
        "snagDescription": "DAMAGED CABLES",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*HYBRID*HYBRID - OTHERS",
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SECURITY*PADLOCK NOT WORKING",
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK NOT WORKING",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SECURITY*EKMS MALFUNCTION",
        "snagClassification": "SECURITY",
        "snagDescription": "EKMS MALFUNCTION",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SECURITY*PADLOCK BROKEN",
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK BROKEN",
        "severity": "MAJOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class B*SECURITY*SECURITY - OTHERS",
        "snagClassification": "SECURITY",
        "snagDescription": "SECURITY - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class B"
      },
      {
        "mappingKey": "Class C*NO SNAG*NO SNAGS ON SITE",
        "snagClassification": "NO SNAG",
        "snagDescription": "NO SNAGS ON SITE",
        "severity": "NA",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE EXTINGUISHER EXPIRED",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EXPIRED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE EXTINGUISHER EMPTY/MISSING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE EXTINGUISHER EMPTY/MISSING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SUPRESSION SYSTEM REQUIRES RECHARGING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE ALARM CONTROL PANEL FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM CONTROL PANEL FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM HEAT DETECTOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM SMOKE DETECTOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE ALARM BATTERY FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE ALARM BATTERY FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE BREAK GLASS DAMAGED",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE BREAK GLASS DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE SOUNDER FAULTY",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SOUNDER FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*WIRING",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "WIRING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FIRE SYSTEMS*FIRE SYSTEMS - OTHERS",
        "snagClassification": "FIRE SYSTEMS",
        "snagDescription": "FIRE SYSTEMS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*SHELTER ROOF REPAIR",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF REPAIR",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*SHELTER ROOF WATERPROOFING",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER ROOF WATERPROOFING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*SHELTER PADLOCK HOOK IS CUT",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER PADLOCK HOOK IS CUT",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*SHELTER NEEDS REPAIRING",
        "snagClassification": "CIVIL",
        "snagDescription": "SHELTER NEEDS REPAIRING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*MAIN GATE SNAG",
        "snagClassification": "CIVIL",
        "snagDescription": "MAIN GATE SNAG",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*BOUNDARY WALL DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*BOUNDARY WALL PAINT WORK",
        "snagClassification": "CIVIL",
        "snagDescription": "BOUNDARY WALL PAINT WORK",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*TOWER PAINT EXFOLIATED",
        "snagClassification": "CIVIL",
        "snagDescription": "TOWER PAINT EXFOLIATED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*SAFETY ROPE DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "SAFETY ROPE DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*GUIDE WIRE DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "GUIDE WIRE DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*ROOM DOOR BROKEN",
        "snagClassification": "CIVIL",
        "snagDescription": "ROOM DOOR BROKEN",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*GROUND LEVELING",
        "snagClassification": "CIVIL",
        "snagDescription": "GROUND LEVELING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*CABLE TRAY DAMAGED",
        "snagClassification": "CIVIL",
        "snagDescription": "CABLE TRAY DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*CIVIL*CIVIL - OTHERS",
        "snagClassification": "CIVIL",
        "snagDescription": "CIVIL - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC FILTER REPLACED",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FILTER REPLACED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*INDOOR AC BLOWER MOTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "INDOOR AC BLOWER MOTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*OUTDOOR AC CONDENSER MOTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "OUTDOOR AC CONDENSER MOTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC COMPRESSOR  FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC COMPRESSOR  FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC LEAKAGE",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC LEAKAGE",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC RELAY FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC RELAY FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC CONTACTOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CONTACTOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC GAS REFILLING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC GAS REFILLING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC NOT COOLING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC NOT COOLING",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC FAN FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC FAN FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC CAPACITOR FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC CAPACITOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*ICE FORMATION",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ICE FORMATION",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*CONTROL PANEL FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "CONTROL PANEL FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*ALARM ISSUE",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "ALARM ISSUE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*SPARE MISSING",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "SPARE MISSING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AC UNIT BACK COVER INSULATION",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AC UNIT BACK COVER INSULATION",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*LAC SWITCH FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "LAC SWITCH FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*FILTER DRIER FAULTY",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "FILTER DRIER FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AIR CONDITIONING*AIR CONDITIONING - OTHERS",
        "snagClassification": "AIR CONDITIONING",
        "snagDescription": "AIR CONDITIONING - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*RECTIFIER MODULE FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER MODULE FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*CONTROL PANEL DISPLAY FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CONTROL PANEL DISPLAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*RECTIFIER CIRCUIT BREAKER FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER CIRCUIT BREAKER FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*FAULTY BATTERY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "FAULTY BATTERY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*RECTIFIER DOOR PANEL BROKEN",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "RECTIFIER DOOR PANEL BROKEN",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*FAN FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "FAN FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*AIR FILTER DAMAGED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "AIR FILTER DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*CABLING NOT ROUTED PROPERLY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "CABLING NOT ROUTED PROPERLY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*NO BBU CABINET INSTALLED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "NO BBU CABINET INSTALLED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*MISSING BATTERY - BATTERY THEFT",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "MISSING BATTERY - BATTERY THEFT",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*MISSING BATTERY - DISMANTLED",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "MISSING BATTERY - DISMANTLED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*DC SYSTEM DOOR SENSOR FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM DOOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*DC SYSTEM - OTHERS",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*ADDITIONAL STRING REQD",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "ADDITIONAL STRING REQD",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*DC SYSTEM*DC SYSTEM - SURGE ARRESTOR FAULTY",
        "snagClassification": "DC SYSTEM",
        "snagDescription": "DC SYSTEM - SURGE ARRESTOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*ACCESS*REQUIRES PERMIT/ EMAILL APPROVAL",
        "snagClassification": "ACCESS",
        "snagDescription": "REQUIRES PERMIT/ EMAILL APPROVAL",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*ACCESS*DISMANTLED SITE",
        "snagClassification": "ACCESS",
        "snagDescription": "DISMANTLED SITE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*ACCESS*BUILDING MANAGEMENT NOT ALLOWING",
        "snagClassification": "ACCESS",
        "snagDescription": "BUILDING MANAGEMENT NOT ALLOWING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*ACCESS*ETISALAT SMART LOCK REQ'T",
        "snagClassification": "ACCESS",
        "snagDescription": "ETISALAT SMART LOCK REQ'T",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*ACCESS*ROAD DAMAGED/4X4 REQUIREMENT",
        "snagClassification": "ACCESS",
        "snagDescription": "ROAD DAMAGED/4X4 REQUIREMENT",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*ACCESS*ACCESS - OTHERS",
        "snagClassification": "ACCESS",
        "snagDescription": "ACCESS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*MDB*SURGE ARRESTOR FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "SURGE ARRESTOR FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*MDB*RELAY FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "RELAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*MDB*CIRCUIT BREAKER FAULTY",
        "snagClassification": "MDB",
        "snagDescription": "CIRCUIT BREAKER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*MDB*LABELING MISSING",
        "snagClassification": "MDB",
        "snagDescription": "LABELING MISSING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*MDB*AC POWER CABLE",
        "snagClassification": "MDB",
        "snagDescription": "AC POWER CABLE",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*MDB*GENERATOR POWER CABLE",
        "snagClassification": "MDB",
        "snagDescription": "GENERATOR POWER CABLE",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*MDB*MDB - OTHERS",
        "snagClassification": "MDB",
        "snagDescription": "MDB - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SHELTER*SOCKET FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "SOCKET FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SHELTER*INTERNAL LIGHTING BULB FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "INTERNAL LIGHTING BULB FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SHELTER*EXTERNAL LIGHTING BULB FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "EXTERNAL LIGHTING BULB FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SHELTER*SITE ID DAMAGED",
        "snagClassification": "SHELTER",
        "snagDescription": "SITE ID DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SHELTER*DOOR SENSOR FAULTY",
        "snagClassification": "SHELTER",
        "snagDescription": "DOOR SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SHELTER*SHELTER - OTHERS",
        "snagClassification": "SHELTER",
        "snagDescription": "SHELTER - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AWL*AWL CONTROL PANEL FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL CONTROL PANEL FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AWL*AWL BULB FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL BULB FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AWL*AWL PHOTOCELL FAULTY",
        "snagClassification": "AWL",
        "snagDescription": "AWL PHOTOCELL FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AWL*AWL CABLING DAMAGED",
        "snagClassification": "AWL",
        "snagDescription": "AWL CABLING DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*AWL*AWL - OTHERS",
        "snagClassification": "AWL",
        "snagDescription": "AWL - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTRA MATERIALS*EM MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EM MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTRA MATERIALS*TI MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "TI MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTRA MATERIALS*FIXED MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FIXED MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTRA MATERIALS*BUILDING EXTRA MATERIALS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "BUILDING EXTRA MATERIALS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTRA MATERIALS*GENERATOR IDLE",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "GENERATOR IDLE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTRA MATERIALS*FUEL TANK IDLE",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "FUEL TANK IDLE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTRA MATERIALS*EXTRA MATERIALS - OTHERS",
        "snagClassification": "EXTRA MATERIALS",
        "snagDescription": "EXTRA MATERIALS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*LABELLING MISSING",
        "snagClassification": "TI",
        "snagDescription": "LABELLING MISSING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*POWER REDUNDANCY NOT AVAILABLE",
        "snagClassification": "TI",
        "snagDescription": "POWER REDUNDANCY NOT AVAILABLE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*CABLE ROUTING IS NOT PER STANDARD",
        "snagClassification": "TI",
        "snagDescription": "CABLE ROUTING IS NOT PER STANDARD",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*EQUIPMENT CONNECTED TO THE AC SOCKET",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT CONNECTED TO THE AC SOCKET",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*EQUIPMENT DOOR CANNOT BE CLOSED",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT DOOR CANNOT BE CLOSED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*EQUIPMENT NOT INSTALLED AS PER STANDARD",
        "snagClassification": "TI",
        "snagDescription": "EQUIPMENT NOT INSTALLED AS PER STANDARD",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*BTS COOLING FAN FAULTY",
        "snagClassification": "TI",
        "snagDescription": "BTS COOLING FAN FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*BTS FILTER DAMAGE/MISSING",
        "snagClassification": "TI",
        "snagDescription": "BTS FILTER DAMAGE/MISSING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*TI*TI - OTHERS",
        "snagClassification": "TI",
        "snagDescription": "TI - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*OTHERS*GARBAGE",
        "snagClassification": "OTHERS",
        "snagDescription": "GARBAGE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*OTHERS*PLANTATION",
        "snagClassification": "OTHERS",
        "snagDescription": "PLANTATION",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*OTHERS*HAZARDS",
        "snagClassification": "OTHERS",
        "snagDescription": "HAZARDS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*OTHERS*PEST CONTROL",
        "snagClassification": "OTHERS",
        "snagDescription": "PEST CONTROL",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*OTHERS*OTHERS",
        "snagClassification": "OTHERS",
        "snagDescription": "OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTERNAL ALARMS*NOT WORKING",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "NOT WORKING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTERNAL ALARMS*CABLES NOT ROUTED PROPERLY",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "CABLES NOT ROUTED PROPERLY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTERNAL ALARMS*LOOPED ALARMS",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "LOOPED ALARMS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*EXTERNAL ALARMS*EXTERNAL ALARMS - OTHERS",
        "snagClassification": "EXTERNAL ALARMS",
        "snagDescription": "EXTERNAL ALARMS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*POWER METER*POWER METER NOT WORKING",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT WORKING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*POWER METER*POWER METER CABINET DAMAGED",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABINET DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*POWER METER*POWER METER CABLES ARE DAMANGED",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER CABLES ARE DAMANGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*POWER METER*POWER METER NOT ACCESSIBLE",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER NOT ACCESSIBLE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*POWER METER*POWER METER - OTHERS",
        "snagClassification": "POWER METER",
        "snagDescription": "POWER METER - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FINDINGS*AC UNIT BLOCKED",
        "snagClassification": "FINDINGS",
        "snagDescription": "AC UNIT BLOCKED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FINDINGS*EQUIPMENT UNIT BLOCKED",
        "snagClassification": "FINDINGS",
        "snagDescription": "EQUIPMENT UNIT BLOCKED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FINDINGS*EXTRA DG/ FUEL TANK",
        "snagClassification": "FINDINGS",
        "snagDescription": "EXTRA DG/ FUEL TANK",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FINDINGS*FUEL LEAKAGE",
        "snagClassification": "FINDINGS",
        "snagDescription": "FUEL LEAKAGE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FINDINGS*NO BOUNDARY WALL/FENCE",
        "snagClassification": "FINDINGS",
        "snagDescription": "NO BOUNDARY WALL/FENCE",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*FINDINGS*FINDINGS - OTHERS",
        "snagClassification": "FINDINGS",
        "snagDescription": "FINDINGS - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*VANDALISM*GROUNDING MISSING",
        "snagClassification": "VANDALISM",
        "snagDescription": "GROUNDING MISSING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*VANDALISM*EQUIPMENT MISSING",
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT MISSING",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*VANDALISM*EQUIPMENT/STRUCTURE DAMAGED",
        "snagClassification": "VANDALISM",
        "snagDescription": "EQUIPMENT/STRUCTURE DAMAGED",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*VANDALISM*VANDALISM - OTHERS",
        "snagClassification": "VANDALISM",
        "snagDescription": "VANDALISM - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*P21 INVERTER FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "P21 INVERTER FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*BATTERY FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*BATTERY OFFLINE",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY OFFLINE",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*FUEL SENSOR FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "FUEL SENSOR FAULTY",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*EM MANAGER DISPLAY FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "EM MANAGER DISPLAY FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*BATTERY SHELTER AC FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "BATTERY SHELTER AC FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*HYBRID AIRCON FAULTY",
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID AIRCON FAULTY",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*DAMAGED CABLES",
        "snagClassification": "HYBRID",
        "snagDescription": "DAMAGED CABLES",
        "severity": "MAJOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*HYBRID*HYBRID - OTHERS",
        "snagClassification": "HYBRID",
        "snagDescription": "HYBRID - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SECURITY*PADLOCK NOT WORKING",
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK NOT WORKING",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SECURITY*EKMS MALFUNCTION",
        "snagClassification": "SECURITY",
        "snagDescription": "EKMS MALFUNCTION",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SECURITY*PADLOCK BROKEN",
        "snagClassification": "SECURITY",
        "snagDescription": "PADLOCK BROKEN",
        "severity": "MINOR",
        "siteClass": "Class C"
      },
      {
        "mappingKey": "Class C*SECURITY*SECURITY - OTHERS",
        "snagClassification": "SECURITY",
        "snagDescription": "SECURITY - OTHERS",
        "severity": "MINOR",
        "siteClass": "Class C"
      }
    ],
    "teams": [
      {
        "supervisor": "Asmatullah Tahir Muhammad",
        "driverTechnician": "ASMATHULLAH - MOBILE EM PM - 68713 AD 8",
        "region": "AUH"
      },
      {
        "supervisor": "Basit Khan",
        "driverTechnician": "BASIT KHAN - MOBILE EM PM - 68674 AD 08",
        "region": "AUH"
      },
      {
        "supervisor": "Ghaias Uddin Babar",
        "driverTechnician": "GHAIASUDDIN BABER - MOBILE PM - 31735 AD 14",
        "region": "AUH"
      },
      {
        "supervisor": "Girish Dongra Kotharkar",
        "driverTechnician": "MOJAHID SALIM - MOBILE PM - 31738 AD 14",
        "region": "AUH"
      },
      {
        "supervisor": "Mohsinuddin Mohammad",
        "driverTechnician": "UMER FAROOK - MOBILE EM PM - 31736 AD 14",
        "region": "AUH"
      },
      {
        "supervisor": "Muhammad Sultan",
        "driverTechnician": "USMAN NAZIR- MOBILE PM - 31708 AD 14",
        "region": "AUH"
      },
      {
        "supervisor": "Prabhat Kumar",
        "driverTechnician": "WISSAM TOUMA - MOBILE PM AUH - 58386 AD 17",
        "region": "AUH"
      },
      {
        "supervisor": "Raja Gurusamy",
        "driverTechnician": "-",
        "region": "AUH"
      },
      {
        "supervisor": "Supervisors",
        "driverTechnician": "Drivers",
        "region": "Region"
      },
      {
        "supervisor": "FAHEEM ABDULLAH MUHAMMAD ABDULLAH",
        "driverTechnician": "QASEEM MEER - MOBILE PM - 36083 DXB I",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Jagdish Kamboj",
        "driverTechnician": "IMRAN ABBAS - MOBILE EM PM - 31732 AD 14",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Jay Puzon Tadina",
        "driverTechnician": "SHABIN MATHEW - MOBILE PM - 35898 AD 15",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Manoj Kumar Baranwal",
        "driverTechnician": "EHSAN AHMED - MOBILE PM - 48761 AD 13",
        "region": "DXB/NE"
      },
      {
        "supervisor": "MOHAMMAD ASIF",
        "driverTechnician": "GHULAM SHABBIR - MOBILE PM - 35692 AD 15",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Mohandas Paulraj",
        "driverTechnician": "SHINDERPAUL SINGH - MOBILE PM - 43656 AD 9",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Muhammad Altaf Qureshi",
        "driverTechnician": "ALTAF QURESHI - EM PM - 46967 AD 6",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Muhammad Sibtain Alam",
        "driverTechnician": "SUKHVINDER SINGH - MOBILE EM PM - 57363 DXB W",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Naseef Abdurahman",
        "driverTechnician": "NASEEF ABDURAHMAN- MOBILE PM - 83034 AD 17",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Naveen Chakoo",
        "driverTechnician": "NAVEEN CHACKO - MOBILE PM - 30977 AD 12 XTRAIL",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Nitin Kumar Kanwar Pal Singh",
        "driverTechnician": "ADNAN SAID - MOBILE PM - 53948 AD 07",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Sachin George Varghese",
        "driverTechnician": "SACHIN GEORGE - MOBILE PM - 35683 AD 15",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Suneesh Suresh",
        "driverTechnician": "SUNEESH SURESH - MOBILE EM PM - 46920 AD 6",
        "region": "DXB/NE"
      },
      {
        "supervisor": "VISHNUMON THYAGARAJAN",
        "driverTechnician": "Sajjad Amin - MOBILE PM - 35675 AD 15",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Zafaran Zulficar",
        "driverTechnician": "MOHAMED ZAFRAN - MOBILE EM PM - 47288 AD 6 XTRAIL",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Hansaka Chathuranga",
        "driverTechnician": "HANSAKA CHATHURANGA - MOBILE EM PM - 35894 AD 15",
        "region": "DXB/NE"
      },
      {
        "supervisor": "Hari Krishan",
        "driverTechnician": "Sajjad Amin - MOBILE PM - 35675 AD 15",
        "region": "DXB/NE"
      }
    ],
    "consumableItems": [
      {
        "itemDescription": "ABB-24VDC Relay"
      },
      {
        "itemDescription": "ABB-3 Pole Contactor A40-30-10"
      },
      {
        "itemDescription": "ABB-4 Pole Contactor EBS 24-40"
      },
      {
        "itemDescription": "ABB-4 Pole Contactor EBS 40-30"
      },
      {
        "itemDescription": "ABB-Contactor ESB 40-40+"
      },
      {
        "itemDescription": "ABB-DC Transformer (ABB AC Control panel)"
      },
      {
        "itemDescription": "AC Alarm Card-Bard"
      },
      {
        "itemDescription": "AC Control Panel-Bard (MC Series)"
      },
      {
        "itemDescription": "AC Control Panel-ZNDKOOL"
      },
      {
        "itemDescription": "AC Controller Board-Bard"
      },
      {
        "itemDescription": "AC filter-Bard 3 ton"
      },
      {
        "itemDescription": "AC filter-Bard 5 ton"
      },
      {
        "itemDescription": "AC filter-Cooline 3 ton"
      },
      {
        "itemDescription": "AC filter-Cooline 5 ton"
      },
      {
        "itemDescription": "AC filter-Liebert 3 ton"
      },
      {
        "itemDescription": "AC filter-Liebert 5 ton"
      },
      {
        "itemDescription": "AC Insulation sheet"
      },
      {
        "itemDescription": "AC Surge Arrestor"
      },
      {
        "itemDescription": "Acrylic sheet"
      },
      {
        "itemDescription": "Alarm Cable-LAN 20mtr Cat6"
      },
      {
        "itemDescription": "AWL card-Tech15"
      },
      {
        "itemDescription": "AWL card-Tech34"
      },
      {
        "itemDescription": "AWL card-Tech42/45"
      },
      {
        "itemDescription": "AWL Transformer 12V"
      },
      {
        "itemDescription": "AWL Transformer 24V"
      },
      {
        "itemDescription": "AWL Transformer 48V"
      },
      {
        "itemDescription": "AWL-LED 12V"
      },
      {
        "itemDescription": "AWL-LED 24V"
      },
      {
        "itemDescription": "AWL-LED 48V"
      },
      {
        "itemDescription": "AWL-Photo Cell"
      },
      {
        "itemDescription": "Ballast-36 Watts"
      },
      {
        "itemDescription": "Ballast-Electronic 2x36 watts"
      },
      {
        "itemDescription": "Battery (AC Remote)-AAA"
      },
      {
        "itemDescription": "Bison Kit Glue"
      },
      {
        "itemDescription": "Blower Relay"
      },
      {
        "itemDescription": "Cable Tie"
      },
      {
        "itemDescription": "Capacitor-10uf"
      },
      {
        "itemDescription": "Capacitor-2uf"
      },
      {
        "itemDescription": "Capacitor-45uf"
      },
      {
        "itemDescription": "Capacitor-50uf"
      },
      {
        "itemDescription": "Capacitor-5uf"
      },
      {
        "itemDescription": "Capacitor-60uf 2 pole"
      },
      {
        "itemDescription": "Chain"
      },
      {
        "itemDescription": "Condenser Fan (Bard/Liebert)"
      },
      {
        "itemDescription": "Condenser Fan (Cooline)"
      },
      {
        "itemDescription": "Contactor-2pole 220V"
      },
      {
        "itemDescription": "Contactor-2pole 24V"
      },
      {
        "itemDescription": "Contactor-3pole 220V"
      },
      {
        "itemDescription": "Contactor-3pole 24V"
      },
      {
        "itemDescription": "Cotton Rags"
      },
      {
        "itemDescription": "Door Closer"
      },
      {
        "itemDescription": "Door sensors (magnetic)"
      },
      {
        "itemDescription": "Du Sticker"
      },
      {
        "itemDescription": "Dusting brush"
      },
      {
        "itemDescription": "External LED"
      },
      {
        "itemDescription": "FACP 2 Zone Conventional (Gent)"
      },
      {
        "itemDescription": "FACP 2 Zone Conventional (Shield)"
      },
      {
        "itemDescription": "FACP Battery-12V 1.2AH"
      },
      {
        "itemDescription": "FACP Battery-12V 2.1/2.2AH"
      },
      {
        "itemDescription": "FACP Battery-12V 4.0/5.0AH"
      },
      {
        "itemDescription": "FACP Battery-12V 7.0AH"
      },
      {
        "itemDescription": "FE Refilled-CO2 2/2.5KG"
      },
      {
        "itemDescription": "FE Refilled-CO2 4.5Kg"
      },
      {
        "itemDescription": "FE Refilled-Dry Powder 5kg"
      },
      {
        "itemDescription": "FE Refilled-Dry Powder 6kg"
      },
      {
        "itemDescription": "FE Safety Seal"
      },
      {
        "itemDescription": "FE Sticker"
      },
      {
        "itemDescription": "Filter drier 1/2 brazing type"
      },
      {
        "itemDescription": "Filter drier 1/4 thread type"
      },
      {
        "itemDescription": "Filter drier 3/8 brazing type"
      },
      {
        "itemDescription": "Fire Alarm Sounder"
      },
      {
        "itemDescription": "Fire Break Glass"
      },
      {
        "itemDescription": "Flexible wire-1.5mm 3Core"
      },
      {
        "itemDescription": "Flexible wire-1.5mm 4Core"
      },
      {
        "itemDescription": "Flexible wire-2.5mm 3Core"
      },
      {
        "itemDescription": "Flexible wire-2.5mm 4Core"
      },
      {
        "itemDescription": "Garbage bag"
      },
      {
        "itemDescription": "Gas-R22"
      },
      {
        "itemDescription": "Gas-R407"
      },
      {
        "itemDescription": "Gas-R-410"
      },
      {
        "itemDescription": "Grease"
      },
      {
        "itemDescription": "Hacksaw blade"
      },
      {
        "itemDescription": "Hazard Sticker"
      },
      {
        "itemDescription": "Heat detector"
      },
      {
        "itemDescription": "Hose PIPE for CO2 FE"
      },
      {
        "itemDescription": "Hose PIPE for DP FE"
      },
      {
        "itemDescription": "Labeling Printer Cartridge 12mm"
      },
      {
        "itemDescription": "LED Indicator Lamp (Red/Yellow/Blue/Green)"
      },
      {
        "itemDescription": "MC3000 Control Panel Full set"
      },
      {
        "itemDescription": "Padlock-AUH Du leading"
      },
      {
        "itemDescription": "Padlock-B1"
      },
      {
        "itemDescription": "Padlock-B10"
      },
      {
        "itemDescription": "Padlock-B2"
      },
      {
        "itemDescription": "Padlock-B3"
      },
      {
        "itemDescription": "Padlock-B4"
      },
      {
        "itemDescription": "Padlock-B6"
      },
      {
        "itemDescription": "Padlock-B7"
      },
      {
        "itemDescription": "Padlock-B8"
      },
      {
        "itemDescription": "Padlock-B9"
      },
      {
        "itemDescription": "Padlock-Black Master"
      },
      {
        "itemDescription": "Padlock-DXB Du leading"
      },
      {
        "itemDescription": "Padlock-NE Du leading"
      },
      {
        "itemDescription": "PM Checklist"
      },
      {
        "itemDescription": "PS Module-APM30"
      },
      {
        "itemDescription": "PS Module-Delta Qlua 11"
      },
      {
        "itemDescription": "PS Module-Delta Zlua 1"
      },
      {
        "itemDescription": "PS Module-Eltek"
      },
      {
        "itemDescription": "PS Module-Power One"
      },
      {
        "itemDescription": "PS Module-Vertiv"
      },
      {
        "itemDescription": "Rectifier SPD"
      },
      {
        "itemDescription": "Relay-3 Phase Monitoring (Bard)"
      },
      {
        "itemDescription": "Relay-Bard Blower Control"
      },
      {
        "itemDescription": "Relay-Control 14pin 240V"
      },
      {
        "itemDescription": "Relay-Mains Failure"
      },
      {
        "itemDescription": "Relay-Phase Monitor"
      },
      {
        "itemDescription": "Relay-Timer (Bard)"
      },
      {
        "itemDescription": "Relay-Timer (Liebert)"
      },
      {
        "itemDescription": "Relay-Under Voltage"
      },
      {
        "itemDescription": "safety gloves (Rubber)"
      },
      {
        "itemDescription": "Self-driven screw"
      },
      {
        "itemDescription": "Shelter Outside Bulb (Pin type)"
      },
      {
        "itemDescription": "Shelter Outside Bulb (Screw type)"
      },
      {
        "itemDescription": "Shelter Tubelight-18W"
      },
      {
        "itemDescription": "Shelter Tubelight-36W"
      },
      {
        "itemDescription": "Shelter Tubelight-9W"
      },
      {
        "itemDescription": "Side Grill-Bard 3 ton"
      },
      {
        "itemDescription": "Silicon Tube-Clear"
      },
      {
        "itemDescription": "Silicon Tube-White"
      },
      {
        "itemDescription": "Smoke detector"
      },
      {
        "itemDescription": "Socket-Double (Indoor)"
      },
      {
        "itemDescription": "Socket-Single (Outdoor)"
      },
      {
        "itemDescription": "Spray-Black paint"
      },
      {
        "itemDescription": "Spray-Cleaning (Mr. Muscle)"
      },
      {
        "itemDescription": "Spray-CRC (Contact Cleaner)"
      },
      {
        "itemDescription": "Spray-Foam"
      },
      {
        "itemDescription": "Spray-Gray paint"
      },
      {
        "itemDescription": "Spray-Silver paint"
      },
      {
        "itemDescription": "Spray-Smoke"
      },
      {
        "itemDescription": "Spray-White paint"
      },
      {
        "itemDescription": "Switch-High pressure"
      },
      {
        "itemDescription": "Switch-LAC(Low Ambient Control)"
      },
      {
        "itemDescription": "Switch-Weatherproof"
      },
      {
        "itemDescription": "TAPE-insulation"
      },
      {
        "itemDescription": "TAPE-Teflon"
      },
      {
        "itemDescription": "Transformer 220V to 24V"
      },
      {
        "itemDescription": "Tubelight Starter-4-65W (S10)"
      },
      {
        "itemDescription": "Tubelight-Full Set (18W)"
      },
      {
        "itemDescription": "Tubelight-Full Set (2x36W)"
      },
      {
        "itemDescription": "Vertiv Air Filter"
      },
      {
        "itemDescription": "WD40"
      },
      {
        "itemDescription": "Weather proofing (RF connectors)"
      },
      {
        "itemDescription": "Vertiv PS battery temp.sensor"
      },
      {
        "itemDescription": "Vetiv battery temp.sensor"
      },
      {
        "itemDescription": "Hazzard sticker"
      },
      {
        "itemDescription": "Contactor-3pole 24v"
      },
      {
        "itemDescription": "FE sticker"
      },
      {
        "itemDescription": "FE New-CO2"
      },
      {
        "itemDescription": "FE New-Dry Powder"
      }
    ],
    "siteAndWorkDropdowns": {
      "Region": [
        "DXB",
        "NE",
        "x"
      ],
      "Site Type": [
        "COW",
        "GFO",
        "GFR",
        "GFS",
        "GRD",
        "IBS",
        "ibs",
        "iBS",
        "RDU",
        "RTO",
        "rto",
        "RTR",
        "RTS"
      ],
      "Site Class": [
        "CLASS A",
        "CLASS B",
        "CLASS C"
      ],
      "Colocated": [
        "SHJ2031",
        "SHJ6002"
      ],
      "Snag Classification": [
        "AIR CONDITIONING",
        "AWL",
        "BATTERY",
        "CIVIL",
        "Civil",
        "DC SYSTEM",
        "DC SySTEM",
        "EXTERNAL ALARMS",
        "EXTRA MATERIALS",
        "FINDINGS",
        "FIRE SYSTEMS",
        "MDB",
        "NO SNAG",
        "OTHERS",
        "Others",
        "POWER METER",
        "SECURITY",
        "SHELTER",
        "TI",
        "Ti",
        "VANDALISM"
      ],
      "Snag Severity": [
        "Class A",
        "Class B",
        "Class C",
        "CRITICAL",
        "MAJOR",
        "Major",
        "MINOR",
        "MiNOR",
        "Minor",
        "NA"
      ],
      "Snag Status": [
        "Closed",
        "CLOSED",
        "NA",
        "Open",
        "open",
        "OPEN"
      ],
      "Timeline": [
        "2023-03-22T00:00:00",
        "\`",
        "Close by EM team",
        "SRT team"
      ],
      "TypeofClasses": [
        "CLASS A",
        "CLASS B",
        "CLASS C",
        "CLASSC"
      ],
      "TypeofAcs": [
        "Bard",
        "Bard/General",
        "Bldg",
        "Carrier",
        "Cooline",
        "Gem cool",
        "General",
        "Gree",
        "Liebert",
        "Liebert/DC ACU",
        "Manvair",
        "Mitsubishi",
        "N/A",
        "NA",
        "O general",
        "Sanyo",
        "Super general"
      ]
    },
    "legacyCOColumns": [
      {
        "excelColumn": 1,
        "excelHeader": "SN from Master File of Snag Tracker"
      },
      {
        "excelColumn": 2,
        "excelHeader": "Region"
      },
      {
        "excelColumn": 3,
        "excelHeader": "Site ID"
      },
      {
        "excelColumn": 4,
        "excelHeader": "Colocated"
      },
      {
        "excelColumn": 5,
        "excelHeader": "Site Type"
      },
      {
        "excelColumn": 6,
        "excelHeader": "Site Class"
      },
      {
        "excelColumn": 7,
        "excelHeader": "PM Target Week"
      },
      {
        "excelColumn": 8,
        "excelHeader": "Date Of PM"
      },
      {
        "excelColumn": 9,
        "excelHeader": "Snag Opened by"
      },
      {
        "excelColumn": 10,
        "excelHeader": "Assigned"
      },
      {
        "excelColumn": 11,
        "excelHeader": "Snag Classification"
      },
      {
        "excelColumn": 12,
        "excelHeader": "Snags"
      },
      {
        "excelColumn": 13,
        "excelHeader": "Remarks"
      },
      {
        "excelColumn": 14,
        "excelHeader": "Snag Severity"
      },
      {
        "excelColumn": 15,
        "excelHeader": "Snags Reference No."
      },
      {
        "excelColumn": 16,
        "excelHeader": "Closing Date"
      },
      {
        "excelColumn": 17,
        "excelHeader": "Snag Status"
      },
      {
        "excelColumn": 18,
        "excelHeader": "Closed by"
      },
      {
        "excelColumn": 19,
        "excelHeader": "Timeline"
      },
      {
        "excelColumn": 20,
        "excelHeader": "Action Owner"
      },
      {
        "excelColumn": 21,
        "excelHeader": "# of Faulty Strings"
      },
      {
        "excelColumn": 22,
        "excelHeader": "# of Faulty Cells"
      },
      {
        "excelColumn": 23,
        "excelHeader": "Error Identifier"
      },
      {
        "excelColumn": 24,
        "excelHeader": "SNAG STATUS (New/Old)"
      },
      {
        "excelColumn": 25,
        "excelHeader": "Consumables Used"
      },
      {
        "excelColumn": 26,
        "excelHeader": "Date"
      },
      {
        "excelColumn": 27,
        "excelHeader": "SiteID"
      },
      {
        "excelColumn": 28,
        "excelHeader": "Region"
      },
      {
        "excelColumn": 29,
        "excelHeader": "TTNo."
      },
      {
        "excelColumn": 30,
        "excelHeader": "Work Description"
      },
      {
        "excelColumn": 31,
        "excelHeader": "Item Description"
      },
      {
        "excelColumn": 32,
        "excelHeader": "Brand"
      },
      {
        "excelColumn": 33,
        "excelHeader": "ModelNo."
      },
      {
        "excelColumn": 34,
        "excelHeader": "QTY"
      },
      {
        "excelColumn": 35,
        "excelHeader": "UnitRateinAED"
      },
      {
        "excelColumn": 36,
        "excelHeader": "AmountinAED"
      },
      {
        "excelColumn": 37,
        "excelHeader": "Remarks"
      },
      {
        "excelColumn": 38,
        "excelHeader": "TypeofClasses"
      },
      {
        "excelColumn": 39,
        "excelHeader": "TypeofAcs"
      }
    ]
  },
  "notes": [
    "Source values are preserved as found, including spelling and casing.",
    "Use siteId/workOrderId as structured identifiers in the application; this file does not create site master records from every CO transaction.",
    "Review conflicting or blank values before production import."
  ]
}`;export{e as default};