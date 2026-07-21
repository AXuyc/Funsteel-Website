export const PRODUCTS = [
  {
    slug: 'high-carbon-ferrochrome',
    name: 'High-Carbon Ferrochrome',
    tagline: 'An alloy of chromium and iron (HCFeCr), contains 4~10% Carbon. Also contains small amounts of silicon, phosphorus, and sulfur.',
    origins: ['India', 'Zimbabwe'],
    image: ['HC_FeCr_1.jpg', 'HC_FeCr_2.jpg'],
    type: [
      {
        name: 'Standard Grade',
        description: 'High-carbon ferrochrome is used in stainless steel production and other alloys that require high hardness, wear resistance and corrosion resistance.',
        origin: 'India, Zimbabwe',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): 60-70%, Carbon(C): 4-10%, Silicon(Si): ≤4%, Phosphorus(P): ≤0.03%, Sulfur(S): ≤0.04%'],
          ['Granularity', '0-5mm, 5-15mm, 10-50mm, 10-80mm, 10-150mm'],
          ['Packing', '1 MT jumbo bags or bulk shipment'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      },
      {
        name: 'Low Titanium Grade',
        description: '',
        origin: 'Zimbabwe, China',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): 52-65%, Carbon(C): 4~10%, Silicon(Si): ≤1%, Phosphorus(P): ≤0.04%, Sulfur(S): ≤0.06%, Titanium(Ti): ≤0.03%'],
          ['Granularity', '6-30mm, 10-50mm, 10-100mm'],
          ['Packing', 'Bulk vessel or 1 MT bags'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      },
      {
        name: 'Low Silicon Grade',
        description: '',
        origin: 'Zimbabwe, China',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): 60-70%, Carbon(C): 4-10%, Silicon(Si): ≤2%, Phosphorus(P): ≤0.03%, Sulfur(S): ≤0.04%'],
          ['Granularity', '0-10mm, 10-50mm, 10-100mm'],
          ['Packing', '1 MT jumbo bags'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      },
      {
        name: 'Low Phosphorus Grade',
        description: '',
        origin: 'Zimbabwe, China',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): 60-70%, Carbon(C): 4-10%, Silicon(Si): ≤4%, Phosphorus(P): ≤0.01%, Sulfur(S): ≤0.04%'],
          ['Granularity', '0-10mm, 10-50mm, 10-100mm'],
          ['Packing', '1 MT jumbo bags'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  },
  {
    slug: 'medium-carbon-ferrochrome',
    name: 'Medium-Carbon Ferrochrome',
    tagline: 'An alloy of chromium and iron (MC FeCr), contains 0.5~4% Carbon. Also contains small amounts of silicon, phosphorus, and sulfur.',
    origins: ['Zimbabwe', 'China'],
    image: ['MC_FeCr_1.jpg'],
    type: [
      {
        name: 'Standard Grade',
        description: 'Medium-carbon ferrochrome offers a balance between high strength and lower oxidation potential. It is commonly used in the production of engineering steels or cast iron which require a balance of iron and chromium content.',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): 50-70%, Carbon(C): 0.5-4%, Silicon(Si): ≤2%, Phosphorus(P): ≤0.03%, Sulfur(S): ≤0.03%'],
          ['Granularity', '0-10mm, 10-50mm'],
          ['Packing', '1 MT jumbo bags'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  },
  {
    slug: 'low-carbon-ferrochrome',
    name: 'Low-Carbon Ferrochrome',
    tagline: 'An alloy of chromium and iron (LC FeCr), contains ≤0.5% Carbon. Also contains small amounts of silicon, phosphorus, and sulfur.',
    origins: ['China'],
    image: ['LC_FeCr_1.jpg'],
    type: [
      {
        name: 'Standard Grade',
        description: 'Low-carbon ferrochrome is used in the production of stainless steel and other special steel where low impurity levels and low carbon content are critical. It enhances the quality of the finished product.',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): 50-70%, Carbon(C): ≤0.5%, Silicon(Si): ≤1.5%, Phosphorus(P): ≤0.03%, Sulfur(S): ≤0.03%'],
          ['Granularity', '0-3mm, 3-10mm'],
          ['Packing', '1 MT steel drums or jumbo bags'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  },
  {
    slug: 'micro-carbon-ferrochrome',
    name: 'Micro-Carbon Ferrochrome',
    tagline: 'An alloy of chromium and iron (MCr FeCr), contains ≤0.15% Carbon. Also contains small amounts of silicon, phosphorus, and sulfur.',
    origins: ['Zimbabwe', 'China'],
    image: ['MCr_FeCr_1.jpg'],
    type: [
      {
        name: 'Standard Grade',
        description: 'Used in scenarios where extremely low carbon content is required, such as in the production of high-grade stainless steel and specialty alloys.',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): 60-65%, Carbon(C): ≤0.15%, Silicon(Si): ≤1.0%, Phosphorus(P): ≤0.03%, Sulfur(S): ≤0.03%'],
          ['Granularity', '0-3mm, 3-10mm, 10-50mm'],
          ['Packing', '1 MT steel drums'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  },
  {
    slug: 'chromium-silicon',
    name: 'Chromium Silicon',
    tagline: 'Chromium Silicon(SiCr) is an alloy primarily consisting of chromium, silicon and iron. Typically it contains Cr > 30%, Si > 35% and the rest is iron and other impurities.',
    origins: ['China'],
    image: null,
    type: [
      {
        name: 'Standard Grade',
        description: 'It is used as an intermediate alloy in the process of making medium, low and micro carbon ferrochrome, as well as the deoxidiser of stainless steel and other specialty alloys',
        specs: [
          ['Chemical Composition', 'Silicon(Si): >35%, Chromium(Cr): >30%, Carbon(C): 0.02~1.0%, Phosphorus(P): ≤0.04%, Sulfur(S): ≤0.01% '],
          ['Granularity', '10-50mm, 10-80mm'],
          ['Packing', '1 MT jumbo bags or bulk'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  },
  {
    slug: 'cast-iron',
    name: 'Cast Iron',
    tagline: 'Cast Iron is a type of iron-carbon alloy with carbon content more than 2%. It generally tends to be brittle, with low melting point, good fluidity, castability and excellent machinability.',
    origins: ['China'],
    image: ['Cast_Iron_2.png', 'Cast_Iron_1.png'],
    type: [
      {
        name: 'Ductile Cast Iron',
        description: 'The main distinguishing characteristic of ductile cast iron is its graphite shape. The round shape of its graphite stops the creation of stress concentration points within the metal matrix. This makes the metal much more ductile than conventional cast iron.',
        origin: 'China',
        specs: [
          ['Chemical Composition', 'Carbon(C): 3.08~3.80%, Silicon(Si): 2.4~3.13%, Manganese(Mn): ≤0.6%, Phosphorus(P): ≤0.05%, Sulfur(S): ≤0.02%'],
          ['Granularity', '10-50mm, 10-80mm'],
          ['Packing', '1 MT jumbo bags or bulk'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      },
      {
        name: 'Grey Cast Iron',
        description: 'Grey cast iron has a graphitic microstructure, it is named after the colour of its fracture which is grey. It has excellent damping capacity as it absorbs energy and converts it into heat.',
        origin: 'China',
        specs: [
          ['Chemical Composition', 'Carbon(C): 3.0~3.6%, Silicon(Si): 1.5~2.5%, Manganese(Mn): 0.5~1.0%, Phosphorus(P): ≤0.3%, Sulfur(S): ≤0.15%'],
          ['Granularity', '10-50mm, 10-80mm'],
          ['Packing', '1 MT jumbo bags or bulk'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  },
  {
    slug: 'chromium',
    name: 'Chromium',
    tagline: 'High purity chromium(Cr) with almost no carbon content (97~99.3% chromium). It is valued for its high hardness, corrosion resistance.',
    origins: ['Malaysia', 'India', 'South Africa'],
    image: ['Cr_1.jpg'],
    type: [
      {
        name: 'Standard Grade',
        description: 'High Purity Chromium has high hardness, high strength, and good ductility. It displays excellent stability at high temperatures and resistant to corrosion.',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): ≥99%, Carbon(C): ≤0.02%, Silicon(Si): ≤0.30%, Phosphorus(P): ≤0.01%, Sulfur(S): ≤0.02%, Nitrogen(N): ≤0.05%'],
          ['Granularity', '10-50mm, 10-80mm'],
          ['Packing', '1 MT jumbo bags or bulk'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  },
  {
    slug: 'chromium-nitride',
    name: 'Chromium Nitride',
    tagline: 'Chromium Nitride (CrN) is very hard and extremely resistant to corrosion.',
    origins: ['Malaysia', 'India', 'South Africa'],
    image: ['CrN_1.jpg'],
    type: [
      {
        name: 'Standard Grade',
        description: 'The primary use for chromium nitride is coating for cutting tools like drill bits and milling, applying the coating increase the tools\' service lifetime 3-8 times.',
        specs: [
          ['Chemical Composition', 'Chromium(Cr): ~60%, Nitrogen(N): ~8.3%, Carbon(C): ~0.027%, Silicon(Si): ~1%, Phosphorus(P): ~0.027%, Sulfur(S): ~0.025%'],
          ['Granularity', '10-60mm'],
          ['Packing', '1 MT jumbo bags or bulk'],
          ['Price', '<a href="contact-us.html">Contact us</a> for pricing']
        ]
      }
    ]
  }
];