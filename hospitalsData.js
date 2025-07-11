const hospitalsData = [
    {
      _id: "1",
      name: "AIIMS Delhi",
      address: {
        street: "Ansari Nagar",
        city: "New Delhi",
        state: "Delhi",
        postalCode: "110029",
      },
      phone: "011-26588500",
      email: "contact@aiims.edu",
      website: "https://www.aiims.edu",
      departments: ["Cardiology", "Neurology", "Orthopedics"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.5,
      appointments: [],
    },
    {
      _id: "2",
      name: "Apollo Hospital Chennai",
      address: {
        street: "Greams Lane",
        city: "Chennai",
        state: "Tamil Nadu",
        postalCode: "600006",
      },
      phone: "044-28293333",
      email: "contact@apollohospitals.com",
      website: "https://www.apollohospitals.com",
      departments: ["Oncology", "Gastroenterology", "Cardiology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.7,
      appointments: [],
    },
    {
      _id: "3",
      name: "Fortis Hospital Bengaluru",
      address: {
        street: "Bannerghatta Road",
        city: "Bengaluru",
        state: "Karnataka",
        postalCode: "560076",
      },
      phone: "080-66214444",
      email: "contact@fortishealthcare.com",
      website: "https://www.fortishealthcare.com",
      departments: ["Orthopedics", "Urology", "Dermatology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.6,
      appointments: [],
    },
    {
      _id: "4",
      name: "Medanta Hospital Gurugram",
      address: {
        street: "Sector 38",
        city: "Gurugram",
        state: "Haryana",
        postalCode: "122001",
      },
      phone: "0124-4141414",
      email: "contact@medanta.org",
      website: "https://www.medanta.org",
      departments: ["Cardiology", "Neurology", "Pulmonology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.8,
      appointments: [],
    },
    {
      _id: "5",
      name: "Tata Memorial Hospital Mumbai",
      address: {
        street: "Dr. E Borges Road",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400012",
      },
      phone: "022-24177000",
      email: "contact@tmc.gov.in",
      website: "https://www.tmc.gov.in",
      departments: ["Oncology", "Radiology", "Surgical Oncology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.9,
      appointments: [],
    },
    {
      _id: "6",
      name: "Kokilaben Dhirubhai Ambani Hospital",
      address: {
        street: "4th Floor, Opposite Andheri Sports Complex",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400053",
      },
      phone: "022-42696969",
      email: "info@kdahospital.com",
      website: "https://www.kokilabenhospital.com",
      departments: ["Cardiology", "Neurology", "Orthopedics"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.6,
      appointments: [],
    },
    {
      _id: "7",
      name: "Max Super Specialty Hospital",
      address: {
        street: "Saket, 1, Press Enclave Road",
        city: "New Delhi",
        state: "Delhi",
        postalCode: "110017",
      },
      phone: "011-26521122",
      email: "contact@maxhealthcare.com",
      website: "https://www.maxhealthcare.in",
      departments: ["Cardiology", "Gastroenterology", "Neurosurgery"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.7,
      appointments: [],
    },
    {
      _id: "8",
      name: "Manipal Hospital",
      address: {
        street: "Manipal College of Nursing",
        city: "Bengaluru",
        state: "Karnataka",
        postalCode: "560017",
      },
      phone: "080-22228666",
      email: "info@manipalhealth.com",
      website: "https://www.manipalhospital.com",
      departments: ["Cardiology", "Urology", "Pediatrics"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.5,
      appointments: [],
    },
    {
      _id: "9",
      name: "Christian Medical College",
      address: {
        street: "Ida Scudder Road",
        city: "Vellore",
        state: "Tamil Nadu",
        postalCode: "632004",
      },
      phone: "0416-2281000",
      email: "info@cmcvellore.ac.in",
      website: "https://www.cmch-vellore.edu",
      departments: ["Cardiology", "Oncology", "Pediatrics"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.8,
      appointments: [],
    },
    {
      _id: "10",
      name: "Sankara Nethralaya",
      address: {
        street: "No. 18, College Road",
        city: "Chennai",
        state: "Tamil Nadu",
        postalCode: "600006",
      },
      phone: "044-28258282",
      email: "info@sankaranethralaya.org",
      website: "https://www.sankaranethralaya.org",
      departments: ["Ophthalmology", "Optometry", "Ocular Plastic Surgery"],
      availableServices: ["Emergency", "Outpatient"],
      ratings: 4.9,
      appointments: [],
    },
    {
      _id: "11",
      name: "Lilavati Hospital",
      address: {
        street: "A-791, Bandra Reclamation",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400050",
      },
      phone: "022-67162222",
      email: "info@lilavatihospital.com",
      website: "https://www.lilavatihospital.com",
      departments: ["Cardiology", "Gastroenterology", "Neurosurgery"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.5,
      appointments: [],
    },
    {
      _id: "12",
      name: "SRMC Hospital",
      address: {
        street: "Pattabiram, Chennai",
        city: "Chennai",
        state: "Tamil Nadu",
        postalCode: "600077",
      },
      phone: "044-2461-0200",
      email: "info@srmc.edu.in",
      website: "https://www.srmc.edu.in",
      departments: ["Cardiology", "Orthopedics", "Neurosurgery"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.6,
      appointments: [],
    },
    {
      _id: "13",
      name: "Narayana Health",
      address: {
        street: "1st Floor, 2nd Block, 2nd Stage",
        city: "Bengaluru",
        state: "Karnataka",
        postalCode: "560070",
      },
      phone: "080-4666-4666",
      email: "info@narayanahealth.org",
      website: "https://www.narayanahealth.org",
      departments: ["Cardiology", "Pulmonology", "Oncology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.7,
      appointments: [],
    },
    {
      _id: "14",
      name: "HCG Cancer Centre",
      address: {
        street: "No. 8, 9th Block, Jayanagar",
        city: "Bengaluru",
        state: "Karnataka",
        postalCode: "560069",
      },
      phone: "080-4151-1111",
      email: "info@hcgglobal.com",
      website: "https://www.hcgglobal.com",
      departments: ["Oncology", "Radiation Oncology", "Surgical Oncology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.8,
      appointments: [],
    },
    {
      _id: "15",
      name: "Fortis Escorts Heart Institute",
      address: {
        street: "Okhla Road, New Friends Colony",
        city: "New Delhi",
        state: "Delhi",
        postalCode: "110025",
      },
      phone: "011-26822454",
      email: "info@fortisescorts.com",
      website: "https://www.fortisescorts.com",
      departments: ["Cardiology", "Cardiac Surgery", "Cardiac Rehabilitation"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.7,
      appointments: [],
    },
    {
      _id: "16",
      name: "PGIMER",
      address: {
        street: "Sector 12, Chandigarh",
        city: "Chandigarh",
        state: "Chandigarh",
        postalCode: "160012",
      },
      phone: "0172-2755595",
      email: "pgimer@pgimer.edu.in",
      website: "https://www.pgimer.edu.in",
      departments: ["Cardiology", "Neurosurgery", "Endocrinology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.6,
      appointments: [],
    },
    {
      _id: "17",
      name: "Jaslok Hospital",
      address: {
        street: "15, Dr. G. Deshmukh Road, Mahalaxmi",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400034",
      },
      phone: "022-66570000",
      email: "info@jaslokhospital.net",
      website: "https://www.jaslokhospital.net",
      departments: ["Cardiology", "Gastroenterology", "Pediatrics"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.4,
      appointments: [],
    },
    {
      _id: "18",
      name: "Sanjivani Hospital",
      address: {
        street: "58/11, D-5, Nitin Disha Complex",
        city: "Pune",
        state: "Maharashtra",
        postalCode: "411037",
      },
      phone: "020-24255929",
      email: "info@sanjivani.org",
      website: "http://www.sanjivani.org",
      departments: ["Cardiology", "Orthopedics", "Pediatrics"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.5,
      appointments: [],
    },
    {
      _id: "19",
      name: "Wockhardt Hospital",
      address: {
        street: "Mahalaxmi, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400011",
      },
      phone: "022-24452626",
      email: "info@wockhardthospitals.com",
      website: "https://www.wockhardthospitals.com",
      departments: ["Cardiology", "Orthopedics", "Neurosurgery"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.6,
      appointments: [],
    },
    {
      _id: "20",
      name: "Sushrut Hospital",
      address: {
        street: "Sector 11, Gandhinagar",
        city: "Gujarat",
        state: "Gujarat",
        postalCode: "382010",
      },
      phone: "079-23240111",
      email: "info@sushruthospital.com",
      website: "http://www.sushruthospital.com",
      departments: ["General Surgery", "Pediatrics", "Gynecology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.4,
      appointments: [],
    },
    {
      _id: "21",
      name: "Shree Harikrishna Hospital",
      address: {
        street: "Opp. Shreeji Party Plot, Sardar Patel Ring Road",
        city: "Ahmedabad",
        state: "Gujarat",
        postalCode: "380058",
      },
      phone: "079-27175050",
      email: "info@shreeharikrishna.com",
      website: "http://www.shreeharikrishna.com",
      departments: ["Orthopedics", "Neurosurgery", "General Medicine"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.5,
      appointments: [],
    },
    {
      _id: "22",
      name: "RIMS Hospital",
      address: {
        street: "RIMS Campus, Jharkhand",
        city: "Ranchi",
        state: "Jharkhand",
        postalCode: "834009",
      },
      phone: "0651-2491010",
      email: "info@rimsranchi.org",
      website: "http://www.rimsranchi.org",
      departments: ["Cardiology", "Urology", "Pulmonology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.3,
      appointments: [],
    },
    {
      _id: "23",
      name: "Medicover Hospital",
      address: {
        street: "Hitech City, Madhapur",
        city: "Hyderabad",
        state: "Telangana",
        postalCode: "500081",
      },
      phone: "040-40077777",
      email: "info@medicoverhospitals.in",
      website: "http://www.medicoverhospitals.in",
      departments: ["Cardiology", "Orthopedics", "Neurology"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.4,
      appointments: [],
    },
    {
      _id: "24",
      name: "MGM Healthcare",
      address: {
        street: "MGM Healthcare Campus, 4th Floor",
        city: "Chennai",
        state: "Tamil Nadu",
        postalCode: "600100",
      },
      phone: "044-42999999",
      email: "info@mgmhealthcare.in",
      website: "http://www.mgmhealthcare.in",
      departments: ["Cardiology", "Orthopedics", "Pediatrics"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.6,
      appointments: [],
    },
    {
      _id: "25",
      name: "Breach Candy Hospital",
      address: {
        street: "Breach Candy, Mumbai",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400026",
      },
      phone: "022-23857777",
      email: "info@breachcandyhospital.com",
      website: "http://www.breachcandyhospital.com",
      departments: ["Cardiology", "Gastroenterology", "Neurosurgery"],
      availableServices: ["Emergency", "Outpatient", "Inpatient"],
      ratings: 4.6,
      appointments: [],
    },
  ];
  
  export default hospitalsData;
  