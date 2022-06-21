export const PERKS=[
    {
      id: "1",
      name: `Doctor's Consultation`,
      description: "Consult and examination for blood pressure, weight",
      subcategories: [],
      services: [
        {
          name: "Physical examination - in person",
          description: "",
          isOptional: false,
        },
        {
          name: "Screening review - telemedicine platform",
          description: "",
          isOptional: false,
        },
      ],
    },
    {
      id: "2",
      name: "Blood investigation",
      description: "",
      subcategories: [
        {
          name: "Haematology profile",
          description:
            "To screen for infection and anaemia (low blood counts)",
          services: [
            {
              name: "Full blood count",
              description:
                "Haemoglobin level, White cell count, Platelet count",
              isOptional: false,
            },
            { name: "Blood ABO group", description: "", isOptional: false },
          ],
        },
        {
          name: "Diabetes profile",
          description: "To screen for diabetes",
          services: [
            { name: "Fasting glucose", description: "", isOptional: false },
          ],
        },
        {
          name: "Lipid profile",
          description:
            "To monitor cholesterol levels which is a risk for heart attack and strokes",
          services: [
            {
              name: "Cholesterol panel",
              description:
                "Total Cholesterol, HDL,LDL, Triglycerides, Cholesterol/HDL ratio",
              isOptional: false,
            },
          ],
        },
        {
          name: "Kidney profile",
          description: "To establish kidney health",
          services: [
            {
              name: "Kidney function test",
              description: "Sodium, Potassium, Chloride,Urea,Creatinine",
              isOptional: false,
            },
          ],
        },
        {
          name: "Liver profile",
          description: "To establish liver health and liver enzyme levels",
          services: [
            {
              name: "Liver panel",
              description:
                "Bilirubin / Total Protein / Albumin / AST / ALT / ALP / GGT",
              isOptional: false,
            },
          ],
        },
        {
          name: "Bone and Joint function profile",
          description: "To establish bone health and joint mobility",
          services: [
            { name: 'Calcium / Phosphate / Uric acid', description: '', isOptional: false },
            { name: 'Erythrocyte sedimentation rate (ESR)', description: '', isOptional: false },
            { name: 'Rheumatoid factor (RF)', description: '', isOptional: false },
          ]
        },
        {
          name: "Hepatitis Panel",
          description: "To screen for liver hepatitis infections",
          services: [
            {
              name: "Hepatitis B screen",
              description:
                "Hepatitis Bs Antigen(HBsAg), Hepatitis Bs Antibody(HBsAb)",
              isOptional: false,
            },
            {
              name: "Hepatitis A screen",
              description: "Hepatitis A Total Antibody",
              isOptional: true,
            },
          ],
        },
        {
          name: "Thyroid Profile",
          description:
            "To monitor thyroid hormone levels which regular metabolism",
          services: [
            {
              name: "Thyroid Panel",
              description: "Free T4 (FT4), Thyroid Stimulating Hormone (TSH)",
              isOptional: false,
            },
          ],
        },
        {
          name: "Cancer Markers",
          description: "To check possibility for cancers",
          services: [
            {
              name: "Alpha-Feto Protein (AFP) - Liver cancer",
              description: "",
              isOptional: false,
            },
            {
              name: "Carcinoembryonic Antigen (CEA) - Colon cancer",
              description: "",
              isOptional: false,
            },
            {
              name: "Prostate-Specific Antigen (PSA) - Prostate cancer",
              description: "",
              isOptional: true,
            },
            {
              name: "CA 19.9 - Pancreatitic cancer",
              description: "",
              isOptional: true,
            },
          ],
        },
      ],
      services:[]
    },
    {
      id: "3",
      name: "Urine Examination",
      description: "To screen for urine infections and kidney health",
      subcategories: [],
      services: [
        {
          name: "Urine Microscopy Examination (UFEME), Urine microalbumin/Creatinine Ratio",
          description: "",
          isOptional: false,
        },
      ],
    },
    {
      id: "4",
      name: "Basic cardiac examination",
      description: "To screen for heart electrical abnormalities",
      subcategories: [],
      services: [
        {
          name: "Electrocardiogram (ECG)",
          description: "",
          isOptional: false,
        },
      ],
    },
    {
      id: "5",
      name: "Stool test",
      description:
        "To screen for blood in stools, a possible sign of colon cancer",
      subcategories: [],
      services: [
        {
          name: "Immunological Stool Occult Blood",
          description: "",
          isOptional: true,
        },
      ],
    },
    {
      id: "6",
      name: `Women's Health and Cancer Screen`,
      description: "Screening for early cancers common in women",
      subcategories: [],
      services: [
        { name: "PAP Smear for women", description: "", isOptional: true },
        {
          name: "Mammogram WITH US breast",
          description: "",
          isOptional: true,
        },
      ],
    },
    {
      id: "7",
      name: "Osteoporosis risk screen",
      description: "To screen for bone strength and risk of fractures",
      subcategories: [],
      services: [
        {
          name: "DEXA bone mineral density",
          description: "",
          isOptional: true,
        },
      ],
    },
    {
      id: "8",
      name: "Positive family history of stroke",
      description:
        "To screen high risk individuals for silent early heart disease",
      subcategories: [],
      services: [
        { name: "2D Echo", description: "", isOptional: true },
        {
          name: "CT Coronaries with Calcium Score",
          description: "",
          isOptional: true,
        },
        { name: "Ultrasound AAA", description: "", isOptional: true },
        {
          name: "Ultrasound peripheral artery disease (Per Leg)",
          description: "",
          isOptional: true,
        },
      ],
    },
    {
      id: "9",
      name: "Smoker Optional",
      description:
        "To screen smokers due to increased risk of lung diseases and lung cancer",
      subcategories: [],
      services: [
        {
          name: "Chest X-Ray - for social smokers",
          description: "",
          isOptional: true,
        },
        {
          name: "Low Dose CT Lung Screen - for chronic heavy smokers",
          description: "",
          isOptional: true,
        },
      ],
    },
    {
      id: "10",
      name: "Sexual transmitted infection risk",
      description:
        "To screen for sexual transmitted diseases in high risk individuals",
      subcategories: [],
      services: [
        {
          name: "STD screening profile",
          description:
            "Chlamydia/Gonorrhea PCR, Herpes Simplex Virus Type I & II IgG, Syphilis TP Ab, HIV screen",
          isOptional: true,
        },
      ],
    },
    {
      id: "11",
      name: "Fertility screen",
      description: "To rule out fertility hormones imbalances",
      subcategories: [],
      services: [
        {
          name: "Male Fertility Profile",
          description: "Testosterone, LH, FSH, Prolactin",
          isOptional: true,
        },
        {
          name: "Female Fertility Profile",
          description: "E2, FSH, LH, Prolcatin, Progesterone",
          isOptional: true,
        },
      ],
    },
  ];