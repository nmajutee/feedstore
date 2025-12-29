export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  image: string;
  topCategory: string;
  tags: string[];
  description: string;
  details: string;
  animal: string;
  weight: string;
  minQuantity: string;
  lifeStage: string;
  protein: string;
  energy?: string;
  packaging: string[];
  benefits: string[];
  bestSeller: boolean;
  feedingRate?: string;
  ingredients?: string;
  longDescription?: string;
  feedingGuide?: string;
  faqs?: { question: string; answer: string }[];
}



export interface Category {
  id: string;
  slug: string;
  name: string;
  title: string;
  icon: string;
  image?: string;
  description: string;
  
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 'poultry-feed',
    slug: 'poultry-feed',
    name: 'Poultry Feed',
    title: 'Poultry Feed',
    icon: 'ph:bird',
    image: '/images/categories/poultry/thumb.jpg',
    description: 'High quality feed for chickens, ducks, and other poultry.',
    products: []
  },
  {
    id: 'livestock-feed',
    slug: 'livestock-feed',
    name: 'Livestock Feed',
    title: 'Livestock Feed',
    icon: 'ph:cow',
    image: '/images/categories/livestock/thumb.jpg',
    description: 'Nutritious feed for cattle, sheep, goats, and pigs.',
    products: []
  },
  {
    id: 'pig-feed',
    slug: 'pig-feed',
    name: 'Pig Feed',
    title: 'Pig Feed',
    icon: 'mdi:pig',
    image: '/images/categories/pig/thumb.jpg',
    description: 'Complete nutrition for pigs at all stages.',
    products: []
  },
  {
    id: 'organic-feed',
    slug: 'organic-feed',
    name: 'Organic Feed',
    title: 'Organic Feed',
    icon: 'ph:plant',
    image: '/images/categories/organic/thumb.jpg',
    description: 'Certified organic and non-GMO feed options.',
    products: []
  },
  {
    id: 'specialty-feed',
    slug: 'specialty-feed',
    name: 'Specialty Feed',
    title: 'Specialty Feed',
    icon: 'mdi:rabbit',
    image: '/images/categories/specialty/thumb.jpg',
    description: 'Feed for rabbits, game birds, and pets.',
    products: []
  }
];

export const products: Product[] = [
  // --- Poultry Feed (10 Products) ---
  {
    id: 'pf-1',
    name: 'Premium Poultry Feed',
    slug: 'premium-poultry-feed',
    price: 22.99,
    image: '/images/products/premium-poultry-feed.jpg',
    topCategory: 'poultry-feed',
    tags: ['general-poultry'],
    description: 'Full-nutrition complete feed for chickens.',
    details: 'A balanced diet suitable for a mixed flock of poultry, ensuring overall health and vitality.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '16%',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Complete nutrition', 'Supports mixed flocks', 'Economical'],
    bestSeller: true,
    longDescription: `
      <p>Our Premium Poultry Feed is the cornerstone of a healthy, productive flock. Designed for mixed flocks of layers, broilers, and dual-purpose breeds, this versatile formula simplifies feeding while maximizing results. Whether you are a backyard enthusiast with a dozen hens or a small-scale producer, this feed delivers the consistent nutrition your birds need to thrive.</p>

      <p><strong>Scientifically Balanced Nutrition:</strong> At the heart of this feed is a precise balance of protein, energy, vitamins, and minerals. The 16% protein content is ideal for maintaining adult birds, supporting feather health, and sustaining consistent egg production. We use only high-quality grains and plant proteins, ensuring high digestibility and minimal waste.</p>

      <p><strong>Gut Health & Immunity:</strong> We believe that health starts in the gut. That's why our Premium Poultry Feed is fortified with prebiotics and probiotics to support a healthy digestive microbiome. A healthy gut means better nutrient absorption and a stronger immune system, helping your flock resist common challenges and environmental stressors.</p>

      <p><strong>Egg Quality You Can See:</strong> For layers, nutrition directly impacts egg quality. Our formula includes optimal levels of calcium and phosphorus for strong shells, as well as marigold extract to promote vibrant, golden yolks. Your customers (and your family) will taste the difference.</p>

      <p><strong>Clean & Safe:</strong> We take safety seriously. Our feed is produced in a facility that adheres to strict quality control standards. It is free from antibiotics, hormones, and animal by-products, giving you peace of mind about what goes into your birds and, ultimately, your food.</p>

      <p><strong>Versatility for Every Coop:</strong> One of the biggest challenges for flock owners is managing different types of birds. This feed is formulated to be a "one-bag solution" for maintenance and laying, reducing the need to buy multiple specialized feeds for a general mixed flock.</p>
    `,
    feedingGuide: `
      <p><strong>General Feeding Instructions:</strong> Provide AgroPro Premium Poultry Feed as the sole ration for adult poultry. Feed should be available free-choice (ad libitum) at all times. Birds will self-regulate their intake based on their energy needs.</p>

      <ul>
        <li><strong>Layers:</strong> Expect an intake of approximately 0.25 to 0.30 lbs per bird per day, depending on breed and environmental conditions.</li>
        <li><strong>Maintenance:</strong> For non-laying adult birds, intake may be slightly lower.</li>
        <li><strong>Transitioning:</strong> When switching to this feed from another brand, mix the new feed with the old feed over a period of 7-10 days to prevent digestive upset. Start with 25% new feed and gradually increase.</li>
      </ul>

      <p><strong>Water:</strong> Always provide clean, fresh water. Water consumption drives feed intake; if birds are thirsty, they will not eat enough to maintain production.</p>

      <p><strong>Grit & Oyster Shell:</strong> While this feed is balanced, offering free-choice grit is recommended for birds without access to coarse soil. For high-producing layers, offering supplemental oyster shell free-choice can help ensure calcium levels are sufficient for eggshell quality.</p>
    `,
    faqs: [
      {
        question: "Is this feed medicated?",
        answer: "No, our Premium Poultry Feed is non-medicated and antibiotic-free. It relies on high-quality nutrition and gut-health additives to support bird health naturally."
      },
      {
        question: "Can I feed this to ducks?",
        answer: "Yes, this feed is suitable for a mixed flock including ducks. However, ducks have higher niacin requirements, so for ducklings, we recommend a specific waterfowl starter or supplementing with niacin. For adult ducks, this feed is generally sufficient."
      },
      {
        question: "How should I store this feed?",
        answer: "Store in a cool, dry place away from pests and rodents. We recommend using a sealed metal or plastic container. Use within 6 months of manufacture for best vitamin stability."
      },
      {
        question: "Is this feed organic?",
        answer: "This specific product is not certified organic. However, it is made with natural ingredients and no artificial growth promoters. For certified organic options, please see our Organic Feed category."
      }
    ]
  },
  {
    id: 'pf-2',
    name: 'Broiler Starter Feed',
    slug: 'broiler-starter-feed',
    price: 24.99,
    image: '/images/products/broiler-starter-feed.jpg',
    topCategory: 'poultry-feed',
    tags: ['broiler-starter'],
    description: 'High-protein feed for young meat chickens.',
    details: 'Formulated to provide the essential nutrients for rapid growth and development in broiler chicks from day 1 to 3 weeks of age.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Starter (0-3 weeks)',
    protein: '22%',
    energy: '3000 kcal/kg',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Rapid growth support', 'Strong immune system', 'High digestibility'],
    bestSeller: false,
    longDescription: `
      <p>Give your meat birds the best possible start with our high-performance Broiler Starter Feed. Specifically formulated for the critical first three weeks of life, this 22% protein crumble provides the intense nutritional support needed for rapid skeletal development and early muscle growth.</p>
      <p><strong>Explosive Early Growth:</strong> Broiler chicks have an incredible growth rate potential, but they can only achieve it with the right fuel. Our starter feed is packed with highly digestible amino acids and energy sources to maximize feed conversion efficiency right from the incubator.</p>
      <p><strong>Immune System Support:</strong> The first few weeks are when chicks are most vulnerable. We include a proprietary blend of vitamins, minerals, and probiotics to establish a robust immune system and healthy gut flora, reducing mortality and ensuring uniformity in your flock.</p>
      <p><strong>Easy-to-Eat Crumble:</strong> We know that feed intake is key. Our fine crumble texture is perfectly sized for small beaks, encouraging immediate consumption and reducing waste compared to mash or large pellets.</p>
      <p><strong>No Antibiotics Needed:</strong> Raised right, your birds don't need constant medication. Our feed relies on superior nutrition and natural gut health promoters to keep your flock thriving without the use of antibiotics or hormones.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed continuously as the sole ration from day of hatch through approximately 21 days (3 weeks) of age.</p>
      <ul>
        <li><strong>Access:</strong> Ensure feeders are always full. Chicks should never run out of feed.</li>
        <li><strong>Water:</strong> Provide fresh, clean water at all times. Dip chicks' beaks in water upon arrival to help them find it.</li>
        <li><strong>Transition:</strong> At 3 weeks of age, gradually transition to our Broiler Grower Feed over a 3-5 day period.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Each chick will consume approximately 2-3 lbs of starter feed during this 3-week period.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to layer chicks?",
        answer: "While it won't hurt them, it is higher in protein and energy than necessary for future laying hens. We recommend our Chick Starter for layers to promote a slower, more sustainable growth rate."
      },
      {
        question: "Is this feed medicated?",
        answer: "No, this is a non-medicated starter. If you require medicated feed for coccidiosis control, please ask about our special order options or consult your vet for water-soluble treatments."
      },
      {
        question: "How long should I feed this?",
        answer: "Feed for the first 3 weeks. Feeding it longer is safe but may be less economical than switching to a Grower ration."
      }
    ]
  },
  {
    id: 'pf-3',
    name: 'Broiler Grower Feed',
    slug: 'broiler-grower-feed',
    price: 23.50,
    image: '/images/products/broiler-grower-feed.jpg',
    topCategory: 'poultry-feed',
    tags: ['broiler-grower'],
    description: 'Energy-balanced feed to grow broilers.',
    details: 'Designed for the growing phase of broilers, ensuring steady weight gain and skeletal development.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Grower (3-6 weeks)',
    protein: '19%',
    energy: '3100 kcal/kg',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Optimized energy-protein ratio', 'Supports muscle development'],
    bestSeller: false,
    longDescription: `
      <p>Keep the momentum going with our Broiler Grower Feed. Designed for the intermediate phase of 3 to 6 weeks, this 19% protein formula balances the need for continued rapid growth with the development of strong bones and joints to support increasing body weight.</p>
      <p><strong>Optimized Energy-to-Protein Ratio:</strong> As birds grow, their energy needs increase relative to protein. Our Grower feed adjusts this balance to prevent metabolic issues while sustaining top-tier weight gain.</p>
      <p><strong>Skeletal Strength:</strong> Fast growth requires a sturdy frame. We fortify this feed with optimal levels of calcium, phosphorus, and Vitamin D3 to ensure leg health and prevent common structural problems in heavy meat birds.</p>
      <p><strong>Efficient Conversion:</strong> Profitability depends on feed conversion ratio (FCR). Our dense, high-quality pellets minimize waste and ensure that every bite contributes to muscle mass, not manure.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed continuously as the sole ration from 22 days of age until approximately 42 days (6 weeks) of age.</p>
      <ul>
        <li><strong>Transition:</strong> Mix with Starter feed for a few days when beginning, and mix with Finisher feed when ending this stage.</li>
        <li><strong>Feeder Space:</strong> As birds grow, ensure they have adequate feeder space to prevent competition and uneven growth.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Expect each bird to consume approximately 8-10 lbs of feed during this 3-week grower phase.</p>
    `,
    faqs: [
      {
        question: "When should I switch to Finisher?",
        answer: "Switch to Broiler Finisher at around 6 weeks of age, or about 2 weeks before your planned processing date."
      },
      {
        question: "Can I skip this and go straight to Finisher?",
        answer: "It is not recommended. Skipping the Grower phase can lead to leg problems if the protein drops too fast, or excess fat deposition if energy is too high too soon."
      }
    ]
  },
  {
    id: 'pf-4',
    name: 'Broiler Finisher Feed',
    slug: 'broiler-finisher-feed',
    price: 22.50,
    image: '/images/products/broiler-finisher-feed.jpg',
    topCategory: 'poultry-feed',
    tags: ['broiler-finisher'],
    description: 'Final stage weight gain feed.',
    details: 'High-energy feed to maximize finish weight and meat quality before processing.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Finisher (6+ weeks)',
    protein: '17%',
    energy: '3200 kcal/kg',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Maximum weight gain', 'Excellent meat quality'],
    bestSeller: false,
    longDescription: `
      <p>Maximize your return on investment with our Broiler Finisher Feed, the final step in our high-performance meat bird program. Formulated for birds from 6 weeks of age until processing, this feed is designed to pack on the final pounds of lean muscle while ensuring excellent fat cover and meat texture.</p>
      <p><strong>The Final Push:</strong> The finishing period is where the bulk of the weight gain happens. Our 17% protein formula shifts the focus from skeletal growth to muscle mass and weight accumulation. The high energy density (3200 kcal/kg) ensures that birds continue to gain weight efficiently even as their growth rate naturally slows down.</p>
      <p><strong>Superior Meat Quality:</strong> You are not just growing birds; you are producing food. Our finisher feed is optimized to produce tender, flavorful meat with the right amount of finish. We avoid fillers and low-quality by-products that can negatively affect the taste and texture of the final product.</p>
      <p><strong>Cost-Effective Finishing:</strong> As birds get larger, their feed intake increases significantly. Our Finisher Feed is formulated to be the most economical part of the cycle, providing exactly what the bird needs without the excess protein that is wasted at this stage. This improves your feed conversion ratio and your bottom line.</p>
      <p><strong>Health & Welfare:</strong> Even in the final weeks, health is paramount. Our feed supports cardiovascular health and strong legs to support heavy weights, ensuring your birds remain active and healthy right up to market day.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed continuously as the sole ration from approximately 42 days (6 weeks) of age until processing.</p>
      <ul>
        <li><strong>Withdrawal:</strong> If using any medicated additives (not present in this standard formula), be sure to follow withdrawal times. This standard feed has a 0-day withdrawal period.</li>
        <li><strong>Water:</strong> Water intake is critical for digestion and temperature regulation, especially for heavy birds. Ensure cool, clean water is always available.</li>
        <li><strong>Environment:</strong> As birds reach market weight, they are more susceptible to heat stress. Feed during cooler parts of the day if possible.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Birds will consume approximately 40-50% of their total lifetime feed intake during this final finishing period.</p>
    `,
    faqs: [
      {
        question: "Do I need to mix this with corn?",
        answer: "No, this is a complete feed. Mixing with corn will dilute the protein and vitamin levels, potentially reducing growth rates and meat quality."
      },
      {
        question: "How long before processing should I feed this?",
        answer: "We recommend feeding this for at least 2 weeks prior to processing to ensure optimal meat flavor and texture."
      },
      {
        question: "Is there a withdrawal period?",
        answer: "For our standard non-medicated Broiler Finisher, there is no withdrawal period. You can feed it right up to the day of processing."
      }
    ]
  },
  {
    id: 'pf-5',
    name: 'Layer Feed Mash',
    slug: 'layer-feed-mash',
    price: 21.50,
    image: '/images/products/layer-feed-mash.jpg',
    topCategory: 'poultry-feed',
    tags: ['layer-feed'],
    description: 'Calcium-rich egg-production feed.',
    details: 'Complete balanced nutrition for laying hens to support consistent egg production and strong shells.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Layer (18+ weeks)',
    protein: '16%',
    energy: '2800 kcal/kg',
    packaging: ['50lb Bag', '25lb Bag'],
    benefits: ['Strong egg shells', 'Consistent production', 'Golden yolks'],
    bestSeller: true,
    longDescription: `
      <p>Support your flock's egg-laying potential with our premium Layer Feed Mash. Specifically formulated for hens from 18 weeks of age and older, this complete ration provides the precise balance of protein, calcium, and energy needed for consistent production of high-quality eggs.</p>
      <p><strong>Stronger Shells:</strong> There is nothing more frustrating than broken eggs. Our Layer Mash is fortified with a blend of calcium sources, including slow-release calcium, to ensure hens have the minerals they need for shell formation around the clock, even while they sleep.</p>
      <p><strong>Golden Yolks:</strong> We know that yolk color matters. Our feed includes natural marigold extract and corn to promote deep, vibrant golden yolks that look as good as they taste. Your breakfast table will never be the same.</p>
      <p><strong>Mash Texture:</strong> This feed is a loose mash texture, which is often preferred by heritage breeds and backyard flocks. It encourages natural foraging behavior and is easily digested. It can also be fermented or wetted to increase palatability and hydration.</p>
      <p><strong>Sustained Production:</strong> Laying eggs is hard work. Our 16% protein formula supports the hen's body condition, ensuring she has the reserves to keep laying through the seasons without depleting her own health.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed free-choice to laying hens starting at approximately 18 weeks of age or when the first egg is laid.</p>
      <ul>
        <li><strong>Intake:</strong> Hens will typically consume 0.25 to 0.30 lbs of feed per day.</li>
        <li><strong>Oyster Shell:</strong> While this feed is high in calcium, offering free-choice oyster shell is recommended for high-producing breeds to allow them to self-regulate their calcium intake.</li>
        <li><strong>Treats:</strong> Limit scratch grains and table scraps to no more than 10% of the total diet to prevent nutrient dilution.</li>
      </ul>
      <p><strong>Water:</strong> Eggs are mostly water! Ensure hens have constant access to fresh, clean water to maintain production.</p>
    `,
    faqs: [
      {
        question: "Why is it a mash instead of pellets?",
        answer: "Mash is a more natural texture that many birds prefer. It is also easier to digest and can be used for making fermented feed. We also offer pellet options if you prefer less waste."
      },
      {
        question: "Can I feed this to roosters?",
        answer: "Yes, in a mixed flock, roosters can eat this feed. However, the high calcium is not necessary for them. If you have a large number of roosters, consider a generic flock raiser with oyster shell on the side for the hens."
      },
      {
        question: "Does this help with molting?",
        answer: "During molt, hens need extra protein. While this feed supports them, switching to a higher protein grower feed or mixing in some high-protein treats during the molt can help them recover feathers faster."
      }
    ]
  },
  {
    id: 'pf-6',
    name: 'Layer Developer',
    slug: 'layer-developer',
    price: 20.00,
    image: '/images/products/layer-developer.jpg',
    topCategory: 'poultry-feed',
    tags: ['layer-developer'],
    description: 'Pre-lay feed for developing pullets.',
    details: 'Prepares young hens for the onset of egg production with balanced calcium and protein.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Developer (10-18 weeks)',
    protein: '15%',
    packaging: ['50lb Bag'],
    benefits: ['Smooth transition to lay', 'Bone strength'],
    bestSeller: false,
    longDescription: `
      <p>Bridge the gap between chickhood and laying with our specialized Layer Developer feed. Designed for pullets aged 10 to 18 weeks, this formula focuses on controlled growth and structural development, ensuring your birds are physically ready for the demands of egg production.</p>
      <p><strong>Controlled Growth:</strong> Rushing a pullet into laying before she is fully grown can lead to prolapse and small eggs. Our 15% protein formula moderates growth rates, allowing the bird's skeletal frame and reproductive tract to mature in sync.</p>
      <p><strong>Bone Density:</strong> Before a hen lays her first egg, she builds up a reserve of "medullary bone" which serves as a calcium bank. Our Developer feed contains the specific mineral balance needed to maximize this bone density, preventing layer fatigue later in life.</p>
      <p><strong>Gut Preparation:</strong> As pullets transition to adult feed, their digestive systems need to adapt. We include prebiotics to maintain a healthy gut microbiome, ensuring they get the most out of their feed.</p>
      <p><strong>Seamless Transition:</strong> This feed is the perfect stepping stone. It prevents the shock of switching directly from a high-protein starter to a high-calcium layer feed, reducing stress on the bird's system.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as the sole ration to pullets from approximately 10 weeks of age until the first egg is seen (around 18-20 weeks).</p>
      <ul>
        <li><strong>Transition In:</strong> Mix 50/50 with Chick Starter for 3-4 days when starting this feed.</li>
        <li><strong>Transition Out:</strong> When you see the first egg, switch to Layer Feed. Mix 50/50 for a week to smooth the change.</li>
        <li><strong>Grit:</strong> Provide insoluble grit (grower size) to aid in digestion, especially if birds have access to pasture.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Pullets will eat more as they grow, averaging about 10-12 lbs of feed per bird during this developmental period.</p>
    `,
    faqs: [
      {
        question: "Can I just keep feeding Chick Starter?",
        answer: "You can, but Chick Starter is often higher in protein and energy than a teenager pullet needs, which can lead to them getting too fat. Obesity in pullets can cause laying problems later."
      },
      {
        question: "Does this contain calcium for shells?",
        answer: "It contains maintenance levels of calcium for bone growth, but NOT the high levels needed for eggshells. High calcium should only be fed once they start laying to avoid kidney damage."
      },
      {
        question: "What if I have meat birds in the same pen?",
        answer: "This feed is too low in protein for meat birds. They will grow very slowly on it. It is best to separate them if possible."
      }
    ]
  },
  {
    id: 'pf-7',
    name: 'Organic Poultry Feed',
    slug: 'organic-poultry-feed',
    price: 32.00,
    image: '/images/products/organic-poultry-feed.jpg',
    topCategory: 'poultry-feed',
    tags: ['organic-poultry'],
    description: 'Certified non-GMO poultry feed.',
    details: 'Premium organic ingredients for health-conscious poultry owners.',
    animal: 'Chicken',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'All Stages',
    protein: '17%',
    packaging: ['40lb Bag'],
    benefits: ['Certified Organic', 'Non-GMO', 'No synthetic additives'],
    bestSeller: false,
    longDescription: `
      <p>Go natural with our Certified Organic Poultry Feed, the premium choice for flock owners who demand the highest standards of purity and sustainability. This feed is meticulously crafted from non-GMO, organically grown grains and proteins, ensuring that your birds—and the eggs or meat they produce—are free from synthetic pesticides, herbicides, and fertilizers.</p>
      <p><strong>Certified Purity:</strong> We don't just say "natural"; we prove it. This feed is fully certified organic, meeting strict USDA standards. You can trust that every ingredient has been traced from the field to the bag, providing a clean, safe diet for your flock.</p>
      <p><strong>Complete Nutrition:</strong> Going organic doesn't mean compromising on performance. Our formula is a complete nutritional package, balanced with organic soy and corn, plus essential vitamins and minerals to support robust health, steady growth, and consistent laying.</p>
      <p><strong>No Synthetic Additives:</strong> We believe in the power of nature. That's why you won't find any artificial preservatives, colors, or flavorings in our feed. We also strictly exclude antibiotics and hormones, relying instead on quality ingredients to support your birds' natural immunity.</p>
      <p><strong>Sustainable Choice:</strong> By choosing organic, you are supporting farming practices that protect soil health, water quality, and biodiversity. It's a choice that feels good and tastes good.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> This is a complete feed suitable for mixed flocks of adult poultry.</p>
      <ul>
        <li><strong>Free Choice:</strong> Provide feed ad libitum (free choice) in clean feeders.</li>
        <li><strong>Supplementation:</strong> Because organic ingredients can vary slightly, offering free-choice organic kelp meal or a vitamin supplement can be beneficial during times of stress.</li>
        <li><strong>Storage:</strong> Organic feeds do not contain strong synthetic preservatives. Store in a cool, dry, dark place and use within 3-4 months of the mill date for freshness.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Similar to conventional feeds, expect adult birds to eat roughly 0.25 lbs per day.</p>
    `,
    faqs: [
      {
        question: "Is this feed non-GMO?",
        answer: "Yes! All certified organic feed is by definition non-GMO. We strictly test our ingredients to ensure purity."
      },
      {
        question: "Why is it more expensive?",
        answer: "Organic grain farming is more labor-intensive and yields are often lower than conventional farming. The certification process also adds cost. The price reflects the premium quality and environmental stewardship behind the product."
      },
      {
        question: "Is it soy-free?",
        answer: "This specific formula contains organic roasted soybeans for protein. We do offer a soy-free organic blend by special order."
      }
    ]
  },
  {
    id: 'pf-8',
    name: 'Free-Range Chicken Feed',
    slug: 'free-range-chicken-feed',
    price: 26.50,
    image: '/images/products/free-range-chicken-feed.jpg',
    topCategory: 'poultry-feed',
    tags: ['free-range'],
    description: 'Optimized for free-ranging birds.',
    details: 'Concentrated nutrition to supplement the diet of foraging chickens.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '18%',
    packaging: ['50lb Bag'],
    benefits: ['Supports foraging', 'Balanced nutrition'],
    bestSeller: false,
    longDescription: `
      <p>Support the active lifestyle of your pastured poultry with our Free-Range Chicken Feed. Unlike standard feeds designed for confined birds, this formula is specifically engineered to complement the natural diet of bugs, greens, and seeds that free-ranging chickens consume.</p>
      <p><strong>Concentrated Nutrition:</strong> Foraging birds fill up on fiber and low-calorie greens. Our feed is more nutrient-dense than standard layer pellets, ensuring that even if they eat less feed, they still get the essential protein, vitamins, and minerals needed to maintain health and egg production.</p>
      <p><strong>Higher Protein:</strong> With 18% protein, this feed provides the extra amino acids needed to repair muscles in active birds and to balance out the lower-protein grasses they consume on pasture.</p>
      <p><strong>Yolk Enhancers:</strong> Free-range eggs are prized for their quality. We enhance this natural advantage with added marigold and paprika extracts to ensure deep orange yolks, even in winter when green grass is scarce.</p>
      <p><strong>Weather Resilience:</strong> Birds living outdoors face more environmental stress. Our formula is fortified with extra Vitamin E and Selenium to boost the immune system and help birds cope with heat, cold, and damp conditions.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed to poultry that have access to pasture or a large run.</p>
      <ul>
        <li><strong>Timing:</strong> Many free-range keepers prefer to feed in the morning to ensure birds get their base nutrition before foraging, or in the evening to encourage them to return to the coop.</li>
        <li><strong>Quantity:</strong> Intake will vary wildly with the seasons. In summer (high forage), birds may eat 20-30% less feed. In winter, intake will increase. Adjust accordingly.</li>
        <li><strong>Grit:</strong> Free-range birds usually find their own grit, but offering insoluble grit is still a good insurance policy.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Variable. Plan for 0.20 - 0.30 lbs per bird per day as a baseline.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to confined birds?",
        answer: "Yes, it is perfectly safe for confined birds. The higher protein will just result in slightly faster growth or larger eggs."
      },
      {
        question: "Is this a complete feed?",
        answer: "Yes, it is a complete feed. It is designed to be the sole ration, but it assumes the birds are also eating some 'extras' from the pasture."
      },
      {
        question: "Does it float?",
        answer: "No, this is a sinking pellet/crumble. It is not designed for feeding fish or ducks in water."
      }
    ]
  },
  {
    id: 'pf-9',
    name: 'Game Bird Feed',
    slug: 'game-bird-feed',
    price: 23.00,
    image: '/images/products/game-bird-feed.webp',
    topCategory: 'poultry-feed',
    tags: ['game-bird'],
    description: 'Pheasant and quail chicken feed.',
    details: 'High protein formula specifically for game birds to maintain flight condition.',
    animal: 'Bird',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'Adult',
    protein: '20%',
    packaging: ['40lb Bag'],
    benefits: ['Excellent plumage', 'Maintains condition'],
    bestSeller: false,
    longDescription: `
      <p>Elevate your game bird program with our specialized Game Bird Feed. Whether you are raising pheasants, quail, chukars, or guineas, this high-performance ration delivers the intense nutrition these athletic birds require. Unlike domestic chickens, game birds have higher metabolic rates and protein needs, which standard poultry feed simply cannot meet.</p>
      <p><strong>High Protein Power:</strong> At 20% protein, this feed supports the lean muscle mass required for flight and active behavior. It is essential for maintaining birds in peak condition for release or breeding.</p>
      <p><strong>Feather Quality:</strong> Plumage is everything for game birds. Our formula is rich in sulfur amino acids (methionine and cystine) which are the building blocks of feathers. Expect glossy, vibrant, weather-resistant plumage that looks great in the pen or in the field.</p>
      <p><strong>Flight Energy:</strong> We balance the high protein with ample energy from quality grains to fuel the explosive bursts of activity characteristic of game birds.</p>
      <p><strong>Mini-Pellet Size:</strong> Game birds often have smaller beaks than chickens. Our feed is processed into a small-diameter mini-pellet that is easy for quail and pheasants to consume, reducing waste and ensuring uniform intake.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as the sole ration to adult game birds (pheasants, quail, chukars, guinea fowl).</p>
      <ul>
        <li><strong>Maintenance:</strong> For non-breeding adults, this feed maintains excellent body condition.</li>
        <li><strong>Breeding:</strong> Start feeding 4 weeks prior to the breeding season to ensure high fertility and hatchability.</li>
        <li><strong>Feeders:</strong> Use covered feeders to keep feed dry and prevent wild birds from stealing it.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Quail: 0.05 lbs/day. Pheasants: 0.15-0.20 lbs/day. Guineas: 0.20-0.25 lbs/day.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to chickens?",
        answer: "Yes, it's safe for chickens. It's excellent for show chickens to improve feather quality, or for molting hens to speed up recovery."
      },
      {
        question: "Is it medicated?",
        answer: "This is a non-medicated maintenance/breeder feed. We offer medicated starters for game bird chicks separately."
      },
      {
        question: "Can I feed this to turkeys?",
        answer: "Yes, it is suitable for growing and adult turkeys."
      }
    ]
  },
  {
    id: 'pf-10',
    name: 'Chicken Scratch Feed',
    slug: 'chicken-scratch-feed',
    price: 18.99,
    image: '/images/products/chicken-scratch-feed.webp',
    topCategory: 'poultry-feed',
    tags: ['scratch-feed'],
    description: 'Supplemental grain mix.',
    details: 'A blend of cracked corn and grains to encourage natural scratching behavior.',
    animal: 'Chicken',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '9%',
    packaging: ['50lb Bag'],
    benefits: ['Encourages activity', 'Treat for hens'],
    bestSeller: false,
    longDescription: `
      <p>Treat your flock to the classic goodness of our Chicken Scratch Feed. This premium blend of cracked corn, whole wheat, and milo is the perfect way to encourage natural behaviors and add a little excitement to your birds' day. While not a complete feed, it is an invaluable tool for the happy, healthy backyard flock.</p>
      <p><strong>Encourages Natural Behavior:</strong> Chickens love to scratch and peck. Scattering this mix in the run or on deep litter encourages them to turn over the bedding, helping to aerate it and keep it dry. This natural exercise keeps birds active and reduces boredom-related picking.</p>
      <p><strong>Winter Warmer:</strong> Digestion generates heat. Feeding scratch grains in the evening during cold winter months gives the birds' digestive systems something to work on overnight, helping to raise their body temperature and keep them comfortable on the roost.</p>
      <p><strong>Training Tool:</strong> Want your chickens to come when called? A handful of scratch is the ultimate bribe. Use it to train your flock to return to the coop at night or to come to you for inspection.</p>
      <p><strong>Cleaned Grains:</strong> We triple-clean our grains to remove dust and debris, ensuring you are paying for high-quality feed, not floor sweepings.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a treat or supplement, NOT as a complete diet.</p>
      <ul>
        <li><strong>Limit Quantity:</strong> Scratch should make up no more than 10% of the total daily diet. Feeding too much can dilute the protein and calcium intake from their layer feed, leading to fewer eggs.</li>
        <li><strong>How to Feed:</strong> Scatter on the ground or in litter to encourage scratching. Do not leave large piles sitting around as it can attract rodents.</li>
        <li><strong>Grit:</strong> Because these are whole and cracked grains, birds MUST have access to insoluble grit to digest them properly.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> A handful per 10 birds is a good rule of thumb.</p>
    `,
    faqs: [
      {
        question: "Is this a complete feed?",
        answer: "No! It is low in protein (9%) and lacks essential vitamins and minerals. It is like candy for chickens—delicious, but not a meal replacement."
      },
      {
        question: "Can I feed this to chicks?",
        answer: "We do not recommend scratch for chicks under 8 weeks old. Their digestive systems are not ready for whole grains, and they need high protein for growth."
      },
      {
        question: "Does it contain corn?",
        answer: "Yes, cracked corn is a primary ingredient. If you need a corn-free treat, please check our other specialty mixes."
      }
    ]
  },

  // --- Livestock Feed (10 Products) ---
  {
    id: 'lf-1',
    name: 'Beef Cattle Feed',
    slug: 'beef-cattle-feed',
    price: 22.00,
    image: '/images/products/beef-cattle-feed.jpg',
    topCategory: 'livestock-feed',
    tags: ['cattle-feed'],
    description: 'Concentrate or complete ration for beef cattle.',
    details: 'Promotes efficient weight gain and muscle development in beef breeds.',
    animal: 'Cattle',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Grower/Finisher',
    protein: '14%',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Rapid weight gain', 'Marbling support'],
    bestSeller: true,
    longDescription: `
      <p>Maximize your herd's potential with our premium Beef Cattle Feed. Formulated for both grower and finisher stages, this 14% protein ration is designed to deliver efficient weight gain and superior carcass quality. Whether you are finishing steers for market or maintaining condition on your breeding stock during winter, this feed provides the consistent nutrition your cattle need.</p>
      <p><strong>Efficient Weight Gain:</strong> Time is money in the beef business. Our feed is energy-dense to promote rapid, efficient gains without compromising rumen health. The balanced carbohydrate profile ensures steady fermentation and optimal nutrient absorption.</p>
      <p><strong>Marbling Support:</strong> For high-quality beef, marbling is key. Our formula includes specific energy sources that encourage intramuscular fat deposition, leading to better grading and a more flavorful end product.</p>
      <p><strong>Rumen Health:</strong> A healthy rumen is the engine of your cattle. We include digestible fiber sources and yeast cultures to stabilize rumen pH and enhance fiber digestion, reducing the risk of bloat and acidosis.</p>
      <p><strong>Mineral Fortification:</strong> Pasture alone often lacks essential trace minerals. Our feed is fortified with copper, zinc, selenium, and Vitamin E to support reproductive health, immune function, and overall vitality.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed to beef cattle as a supplement to good quality forage (hay or pasture).</p>
      <ul>
        <li><strong>Growers (400-700 lbs):</strong> Feed at a rate of 1.5% to 2.5% of body weight daily, depending on desired gain.</li>
        <li><strong>Finishers (700+ lbs):</strong> Gradually increase to 2.0% to 3.0% of body weight daily. Ensure roughage intake is at least 10-15% of the total diet to maintain rumen function.</li>
        <li><strong>Transition:</strong> Introduce this feed gradually over a 14-day period to allow rumen microbes to adapt.</li>
      </ul>
      <p><strong>Water:</strong> Cattle require large volumes of clean water. Ensure unrestricted access at all times.</p>
    `,
    faqs: [
      {
        question: "Does this contain urea?",
        answer: "This specific formulation uses only natural plant protein sources and does not contain urea or other non-protein nitrogen sources."
      },
      {
        question: "Can I feed this to sheep?",
        answer: "NO. This feed contains added copper which can be toxic to sheep. Do not feed to sheep or goats co-mingled with sheep."
      },
      {
        question: "Is this suitable for bulls?",
        answer: "Yes, this feed is excellent for maintaining condition on breeding bulls, especially prior to the breeding season."
      }
    ]
  },
  {
    id: 'lf-2',
    name: 'Dairy Cattle Feed',
    slug: 'dairy-cattle-feed',
    price: 25.50,
    image: '/images/products/dairy-cattle-feed.jpg',
    topCategory: 'livestock-feed',
    tags: ['dairy-cattle'],
    description: 'High-energy feed for milk yield.',
    details: 'Precision-balanced ration to support high lactation demands.',
    animal: 'Cattle',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Lactating',
    protein: '18%',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Increases milk yield', 'Supports health'],
    bestSeller: false,
    longDescription: `
      <p>Unlock the full potential of your dairy herd with our high-performance Dairy Cattle Feed. Engineered for the modern dairy cow, this 18% protein ration is designed to support peak lactation while maintaining body condition and reproductive health. Whether you are milking a family cow or a commercial herd, this feed delivers the consistent nutrition required for high-volume, high-component milk production.</p>
      <p><strong>Peak Lactation Support:</strong> Milk production places an enormous metabolic demand on the cow. Our formula provides a dense source of bypass protein and fermentable carbohydrates to fuel milk synthesis without overloading the rumen. The result is sustained peak production and a more persistent lactation curve.</p>
      <p><strong>Component Quality:</strong> You get paid for components. We include specific fatty acids and fiber sources that promote high butterfat and protein levels in the milk, maximizing the value of every hundredweight produced.</p>
      <p><strong>Reproductive Efficiency:</strong> A cow that doesn't breed back is a cost. By ensuring energy balance and providing essential trace minerals (like organic selenium and chelated zinc), our feed supports rapid uterine involution and strong estrus cycles, helping you maintain a tight calving interval.</p>
      <p><strong>Rumen Health:</strong> We prioritize the cow's engine. Added yeast cultures and buffers help stabilize rumen pH, improving fiber digestion and reducing the risk of sub-acute ruminal acidosis (SARA) during periods of high grain intake.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed to lactating dairy cows as part of a balanced ration including high-quality forage.</p>
      <ul>
        <li><strong>Rate:</strong> Feed approximately 1 lb of grain for every 2.5 to 3.0 lbs of milk produced, depending on forage quality and body condition.</li>
        <li><strong>Frequency:</strong> For best rumen health, split the daily grain allowance into at least two feedings, or feed as part of a TMR (Total Mixed Ration).</li>
        <li><strong>Dry Cows:</strong> Do not feed this high-energy lactation ration to dry cows. Switch to a dry cow mineral and lower energy diet 60 days before calving.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> A high-producing cow may consume 20-30 lbs of this feed per day.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to my family cow?",
        answer: "Absolutely. It is perfect for Jersey or Holstein family cows. Just adjust the amount based on her milk production to prevent her from getting too fat."
      },
      {
        question: "Does it contain urea?",
        answer: "No, we use natural protein sources like soybean meal and distillers grains for maximum palatability and safety."
      },
      {
        question: "Is it suitable for goats?",
        answer: "While the nutrition is similar, this feed is formulated for cattle. We recommend our specific Goat Dairy Feed which has mineral levels optimized for caprine health."
      }
    ]
  },
  {
    id: 'lf-3',
    name: 'Livestock Feed Pellets',
    slug: 'livestock-feed-pellets',
    price: 20.00,
    image: '/images/products/livestock-feed-pellets.jpg',
    topCategory: 'livestock-feed',
    tags: ['livestock-pellets'],
    description: 'Balanced species-agnostic feed.',
    details: 'A versatile pellet suitable for a variety of farm animals.',
    animal: 'Multi-Species',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Maintenance',
    protein: '12%',
    packaging: ['50lb Bag'],
    benefits: ['Versatile', 'Easy storage'],
    bestSeller: false,
    longDescription: `
      <p>Simplify your feed room with our All-Stock Livestock Feed Pellets. This versatile, multi-species ration is the perfect solution for the diverse hobby farm. Formulated to be safe and nutritious for cattle, horses, goats, and sheep, it eliminates the need to buy and store four different types of feed for your maintenance animals.</p>
      <p><strong>One Feed, Many Uses:</strong> Whether you have a pony, a steer, and a couple of pet goats, this feed covers the bases. It provides a baseline level of protein (12%) and energy suitable for maintenance and light growth across species.</p>
      <p><strong>Copper Safe:</strong> The biggest challenge in multi-species feeding is copper sensitivity in sheep. Our All-Stock pellet is formulated with no added copper, making it safe for sheep while still providing adequate nutrition for other stock when fed with good quality forage.</p>
      <p><strong>Highly Palatable:</strong> We use a blend of quality grains and molasses to ensure that even picky eaters enjoy their meal. The pellet form reduces waste and dust compared to sweet feeds or mashes.</p>
      <p><strong>Fiber Rich:</strong> With a high fiber content, this feed is safe for the digestive systems of ruminants and hindgut fermenters (horses) alike, reducing the risk of digestive upset.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a supplement to hay or pasture.</p>
      <ul>
        <li><strong>Cattle & Horses:</strong> Feed 0.5 to 1.0 lbs per 100 lbs of body weight daily.</li>
        <li><strong>Goats & Sheep:</strong> Feed 0.25 to 0.5 lbs per head daily for maintenance.</li>
        <li><strong>Water:</strong> Always provide clean, fresh water.</li>
      </ul>
      <p><strong>Important:</strong> This is a maintenance feed. High-production animals (lactating dairy cows, racehorses, rapid-growth meat birds) will require a more specialized, higher-energy ration.</p>
    `,
    faqs: [
      {
        question: "Is this safe for sheep?",
        answer: "Yes! This formula contains no added copper, making it safe for sheep."
      },
      {
        question: "Can I feed this to pigs?",
        answer: "Pigs can eat it, but as monogastrics, they generally need higher protein and lower fiber. It will not support good growth in pigs but is safe as a snack."
      },
      {
        question: "Is it suitable for chickens?",
        answer: "No, chickens need much higher protein and calcium. This feed is too fibrous for poultry."
      }
    ]
  },
  {
    id: 'lf-4',
    name: 'Goat Grower Feed',
    slug: 'goat-grower-feed',
    price: 19.99,
    image: '/images/products/goat-grower-feed.jpg',
    topCategory: 'livestock-feed',
    tags: ['goat-feed'],
    description: 'Balanced nutrition for growing goats.',
    details: 'Formulated to prevent urinary calculi and support rapid growth.',
    animal: 'Goat',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Grower',
    protein: '16%',
    packaging: ['50lb Bag'],
    benefits: ['Urinary tract health', 'Balanced growth'],
    bestSeller: false,
    longDescription: `
      <p>Raise healthy, robust goats with our specialized Goat Grower Feed. Goats are unique ruminants with specific nutritional requirements that differ from cattle or sheep. Our 16% protein formula is tailored to meet these needs, supporting rapid growth in kids and excellent condition in adult meat and dairy goats.</p>
      <p><strong>Urinary Tract Health:</strong> The number one killer of male goats (wethers and bucks) is urinary calculi (stones). Our feed is formulated with the correct 2:1 Calcium-to-Phosphorus ratio and includes ammonium chloride, a urinary acidifier that actively prevents stone formation.</p>
      <p><strong>Copper Rich:</strong> Unlike sheep, goats have a high requirement for copper. A deficiency causes rough coats, poor immunity, and fishtail. Our feed is fortified with high levels of copper to ensure your goats stay sleek and healthy.</p>
      <p><strong>Digestive Support:</strong> Goats have sensitive stomachs. We include probiotics and yeast culture to support rumen function and prevent bloat, especially during times of stress or weather changes.</p>
      <p><strong>Palatability:</strong> Goats are notorious for being picky. Our pellet is firm, dust-free, and flavored with a hint of anise and molasses to ensure they clean the trough every time.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed to growing kids and active adult goats.</p>
      <ul>
        <li><strong>Kids:</strong> Introduce creep feed at 2 weeks. Wean onto this grower feed at approx 0.5 lbs per day, increasing to 1.0-1.5 lbs per day for rapid growth.</li>
        <li><strong>Adults:</strong> Feed 0.5 to 1.0 lbs per head daily for maintenance. Lactating does may require up to 2.0-3.0 lbs.</li>
        <li><strong>Forage:</strong> Feed should always be accompanied by good quality hay or browse.</li>
      </ul>
      <p><strong>Warning:</strong> Do NOT feed to sheep. The copper levels in this feed are toxic to sheep.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to my buck?",
        answer: "Yes, it is safe for bucks because it contains ammonium chloride to prevent urinary stones."
      },
      {
        question: "Is this for dairy or meat goats?",
        answer: "It is excellent for both. It promotes muscle growth in Boers and structural development in Nubians and Alpines."
      },
      {
        question: "Why can't I just feed sweet feed?",
        answer: "Sweet feed often lacks the specific mineral balancing (especially calcium/phosphorus) needed to prevent stones in male goats. A pelleted complete feed is much safer."
      }
    ]
  },
  {
    id: 'lf-5',
    name: 'Sheep Feed',
    slug: 'sheep-feed',
    price: 20.50,
    image: '/images/products/sheep-feed.jpg',
    topCategory: 'livestock-feed',
    tags: ['sheep-feed'],
    description: 'Lamb grower feed.',
    details: 'Copper-safe formula specifically for sheep and lambs.',
    animal: 'Sheep',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Grower',
    protein: '14%',
    packaging: ['50lb Bag'],
    benefits: ['Copper-safe', 'Wool quality'],
    bestSeller: false,
    longDescription: `
      <p>Ensure the health and productivity of your flock with our dedicated Sheep Feed. Sheep are incredibly efficient converters of forage, but they have a unique sensitivity to copper that makes general livestock feeds dangerous. Our formula is strictly copper-controlled, giving you peace of mind while providing the supplemental nutrition your ewes and lambs need.</p>
      <p><strong>Copper-Safe Guarantee:</strong> We manufacture this feed in a sequence that prevents cross-contamination with high-copper cattle or goat feeds. It contains no added copper, keeping levels well within the safe range for all sheep breeds.</p>
      <p><strong>Wool Quality:</strong> Healthy sheep produce better wool. Our feed is rich in sulfur and zinc, essential nutrients for the synthesis of keratin, the protein that makes up wool fibers. Expect stronger, more lustrous fleeces.</p>
      <p><strong>Lamb Growth:</strong> For growing lambs, this 14% protein ration provides the energy and amino acids needed for steady weight gain without promoting excessive fat deposition. It is ideal for finishing market lambs or developing replacement ewes.</p>
      <p><strong>Ewe Health:</strong> Support your ewes during the critical late-gestation and lactation periods. This feed helps prevent pregnancy toxemia (ketosis) by providing a dense source of energy when the ewe's rumen capacity is limited by lambs.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a supplement to pasture or hay.</p>
      <ul>
        <li><strong>Lambs:</strong> Creep feed from 2 weeks of age. Weaned lambs should receive 1.0 to 1.5 lbs per day depending on target weight gain.</li>
        <li><strong>Ewes:</strong> Feed 0.5 to 1.0 lbs per day during late gestation. Increase to 1.5 to 2.0 lbs during lactation (more for twins/triplets).</li>
        <li><strong>Minerals:</strong> Always provide a free-choice loose mineral specifically designed for sheep.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> A market lamb will consume approx 150-200 lbs of feed from weaning to finish.</p>
    `,
    faqs: [
      {
        question: "Is this safe for goats?",
        answer: "It is safe, but it may not provide enough copper for goats long-term. Goats have higher copper needs than sheep."
      },
      {
        question: "Does it contain ammonium chloride?",
        answer: "Yes, we include ammonium chloride to help prevent urinary calculi (stones) in rams and wethers."
      },
      {
        question: "Can I feed this to hair sheep?",
        answer: "Absolutely. While they don't produce wool, hair sheep (like Katahdins) have the same nutritional and copper-sensitivity profiles as wool breeds."
      }
    ]
  },
  {
    id: 'lf-6',
    name: 'Mixed Herd Livestock Feed',
    slug: 'mixed-herd-livestock-feed',
    price: 21.00,
    image: '/images/products/mixed-herd-livestock-feed.jpg',
    topCategory: 'livestock-feed',
    tags: ['mixed-herd'],
    description: 'For multiple species.',
    details: 'Convenient single feed solution for mixed farms.',
    animal: 'Multi-Species',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '13%',
    packaging: ['50lb Bag'],
    benefits: ['Convenience', 'Balanced nutrition'],
    bestSeller: false,
    longDescription: `
      <p>Streamline your chores with our Mixed Herd Livestock Feed, the ultimate convenience solution for the diverse homestead. We understand that small farms often keep a variety of animals together, and feeding time can become a logistical nightmare of different bags and buckets. This feed is designed to be a safe, nutritious baseline for almost everyone in the barn.</p>
      <p><strong>Universal Safety:</strong> The primary concern in mixed feeding is safety. This feed is formulated without added copper (safe for sheep), without urea (safe for horses), and without ionophores (safe for dogs/horses). It is the "do no harm" option for the mixed barnyard.</p>
      <p><strong>Textured Sweet Feed:</strong> This is a textured feed (sweet feed) containing flaked corn, oats, and pellets, all coated in molasses. This high palatability ensures that even shy or picky animals will come to the bunk, making it an excellent tool for calling the herd in.</p>
      <p><strong>Energy for Maintenance:</strong> With 13% protein and moderate energy, it is perfect for maintaining body condition on adult animals, recreational horses, and pets. It provides the calories needed to keep them warm in winter and active in summer.</p>
      <p><strong>Fiber & Digestion:</strong> The inclusion of high-quality fiber sources supports healthy rumen function in cattle/goats/sheep and healthy hindgut fermentation in horses.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a supplement to forage. Do not feed as the sole ration.</p>
      <ul>
        <li><strong>Cattle/Horses:</strong> 0.5 to 1.0 lbs per 100 lbs body weight.</li>
        <li><strong>Goats/Sheep:</strong> 0.25 to 0.5 lbs per head daily.</li>
        <li><strong>Llamas/Alpacas:</strong> 0.25 to 0.5 lbs per head daily.</li>
      </ul>
      <p><strong>Storage:</strong> Because this is a sweet feed with molasses, it can clump in freezing weather or mold in hot/humid weather if not stored correctly. Keep in a cool, dry place.</p>
    `,
    faqs: [
      {
        question: "Is this safe for horses?",
        answer: "Yes, it is safe for horses as it contains no urea or ionophores. However, for high-performance horses, we recommend a specific equine feed."
      },
      {
        question: "Can I feed this to chickens?",
        answer: "Chickens will pick out the corn and grains, but they need more protein. It's okay as a scratch treat, but not as a main diet."
      },
      {
        question: "Is it dusty?",
        answer: "No, the molasses coating helps bind the fines and reduce dust, which is better for the respiratory health of your animals."
      }
    ]
  },
  {
    id: 'lf-7',
    name: 'Hay Cubes & Forage Pellets',
    slug: 'hay-cubes-forage',
    price: 18.00,
    image: '/images/products/hay-cubes-forage.jpg',
    topCategory: 'livestock-feed',
    tags: ['hay-forage'],
    description: 'Preserved high-fiber feed.',
    details: 'High-quality alfalfa and timothy hay cubes for fiber supplementation.',
    animal: 'Multi-Species',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'All Stages',
    protein: '15%',
    packaging: ['40lb Bag'],
    benefits: ['High fiber', 'Dust-free'],
    bestSeller: false,
    longDescription: `
      <p>Secure your forage supply with our premium Hay Cubes & Forage Pellets. When pasture is scarce, hay is expensive, or storage space is tight, these high-density fiber sources are a lifesaver. Made from sun-cured alfalfa and timothy hay, they provide all the nutritional benefits of long-stem forage in a convenient, easy-to-handle package.</p>
      <p><strong>Consistent Quality:</strong> Baled hay can vary wildly from bale to bale. Our cubes are blended to ensure consistent protein and fiber levels in every bag, so you know exactly what your animals are getting.</p>
      <p><strong>Reduced Waste:</strong> Animals often trample and waste up to 20% of baled hay. With cubes or pellets, waste is virtually eliminated. Every ounce you buy ends up in the animal, not on the floor.</p>
      <p><strong>Respiratory Health:</strong> Our cubes are virtually dust-free, making them an excellent choice for horses with heaves (COPD) or animals kept in confined spaces where air quality is a concern.</p>
      <p><strong>Gut Health:</strong> Fiber is the foundation of health for all herbivores. These cubes provide the "scratch factor" needed to stimulate gut motility and prevent colic or stasis.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Can be fed as a complete hay replacement or a supplement.</p>
      <ul>
        <li><strong>Soaking:</strong> We HIGHLY recommend soaking cubes in water for 15-30 minutes before feeding, especially for horses or older animals, to prevent choke.</li>
        <li><strong>Rate:</strong> Feed at a rate of 1.5% to 2.0% of body weight daily if used as the sole forage source.</li>
        <li><strong>Transition:</strong> Replace baled hay with cubes gradually over 7-10 days.</li>
      </ul>
      <p><strong>Storage:</strong> Store in a dry place. Unlike baled hay, these bags stack neatly and take up 50% less space.</p>
    `,
    faqs: [
      {
        question: "Do I still need to feed grain?",
        answer: "That depends on the animal's needs. For maintenance, these cubes alone may be sufficient. For work or growth, you will likely still need a grain concentrate."
      },
      {
        question: "Are these just alfalfa?",
        answer: "We offer straight Alfalfa, straight Timothy, and a Mixed blend. Please check the tag on the specific bag."
      },
      {
        question: "Can goats eat these?",
        answer: "Yes, goats love them! They are great for reducing waste since goats are notorious for wasting hay."
      }
    ]
  },
  {
    id: 'lf-8',
    name: 'Calf Starter Feed',
    slug: 'calf-starter-feed',
    price: 26.00,
    image: '/images/products/calf-starter-feed.jpg',
    topCategory: 'livestock-feed',
    tags: ['calf-starter'],
    description: 'Feed for young livestock.',
    details: 'Highly palatable starter to encourage rumen development in calves.',
    animal: 'Cattle',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Calf',
    protein: '18%',
    packaging: ['50lb Bag'],
    benefits: ['Rumen development', 'Early growth'],
    bestSeller: false,
    longDescription: `
      <p>Invest in the future of your herd with our premium Calf Starter Feed. The first few months of a calf's life determine its future productivity, and the key to success is early rumen development. Our starter is texturized and coated in molasses to be irresistible to young calves, encouraging them to start eating dry feed as early as 3-4 days of age.</p>
      <p><strong>Rumen Revolution:</strong> Milk goes to the abomasum, but grain goes to the rumen. The fermentation of starches in our starter feed stimulates the growth of rumen papillae—the finger-like projections that absorb nutrients. A well-developed rumen means a calf that can digest forage sooner and grow faster.</p>
      <p><strong>High Protein:</strong> At 18% protein, this feed supports the rapid structural growth of the calf. We use high-quality plant proteins that are easily digestible.</p>
      <p><strong>Coccidiosis Control:</strong> (Optional) We offer this feed with a coccidiostat (like Bovatec or Rumensin) to prevent coccidiosis, a common and costly diarrheal disease in young calves.</p>
      <p><strong>Texture Matters:</strong> Calves prefer texture. Our coarse mix of pellets, flaked corn, and oats prevents the "fines" that calves often refuse, ensuring consistent intake.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Offer free-choice to calves from 3 days of age.</p>
      <ul>
        <li><strong>Freshness:</strong> Calves are picky. Put out small amounts of fresh feed daily and remove any old, wet, or soiled feed.</li>
        <li><strong>Weaning Criteria:</strong> Calves can be weaned from milk when they are consistently consuming 2.0 to 3.0 lbs of starter feed per day for 3 consecutive days.</li>
        <li><strong>Water:</strong> Water intake drives dry feed intake. Ensure calves have access to clean water (separate from milk) at all times.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> A calf will eat approx 5-10 lbs total in the first month, ramping up quickly in the second month.</p>
    `,
    faqs: [
      {
        question: "Should I feed hay with this?",
        answer: "Actually, no. In the first 6-8 weeks, we want calves to fill up on starter grain to develop the rumen papillae. Hay can fill the gut without providing enough energy. Introduce hay after weaning."
      },
      {
        question: "Is this milk replacer?",
        answer: "No, this is a dry grain feed. You should feed this ALONGSIDE milk or milk replacer until weaning."
      },
      {
        question: "How long do I feed this?",
        answer: "Feed until the calf is about 3-4 months old, then transition to a Grower ration."
      }
    ]
  },
  {
    id: 'lf-9',
    name: 'Calf Grower & Finisher',
    slug: 'calf-grower-finisher',
    price: 24.00,
    image: '/images/products/calf-grower-finisher.jpg',
    topCategory: 'livestock-feed',
    tags: ['calf-grower'],
    description: 'Transition feed for calves.',
    details: 'Supports continued growth after the starter phase.',
    animal: 'Cattle',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Grower',
    protein: '16%',
    packaging: ['50lb Bag'],
    benefits: ['Steady growth', 'Healthy transition'],
    bestSeller: false,
    longDescription: `
      <p>Keep them growing strong with our Calf Grower & Finisher. Once your calves are weaned and their rumens are functioning, they need a diet that balances energy for weight gain with fiber for gut health. This 16% protein ration is the perfect follow-up to our Calf Starter.</p>
      <p><strong>Sustained Growth:</strong> The "post-weaning slump" is a real risk. Our Grower feed maintains a high plane of nutrition to ensure that growth curves don't flatten out after milk is removed.</p>
      <p><strong>Fiber Integration:</strong> As calves start eating more hay, their grain needs change. This feed is formulated to complement a forage-based diet, providing the extra energy and protein that hay alone cannot supply.</p>
      <p><strong>Versatility:</strong> This feed works for dairy replacement heifers (to get them to breeding weight) and for beef calves (to prepare them for the feedlot or finishing phase).</p>
      <p><strong>Digestibility:</strong> We use steam-flaked grains which have a higher surface area for digestive enzymes, ensuring that the animal gets the maximum value from every pound of feed.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed to weaned calves from approx 3-4 months up to 6-8 months.</p>
      <ul>
        <li><strong>Rate:</strong> Feed at approx 2% to 2.5% of body weight, not exceeding 6-8 lbs per head per day for heifers (to prevent fattening) or free-choice for beef steers.</li>
        <li><strong>Forage:</strong> Always provide good quality hay or pasture.</li>
        <li><strong>Transition:</strong> Mix 50/50 with Calf Starter for a week when switching feeds.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Variable based on breed and goals.</p>
    `,
    faqs: [
      {
        question: "Can I finish a steer on this?",
        answer: "Yes, you can. For the final finishing phase, you might want to increase the amount fed, but this nutritional profile will produce excellent beef."
      },
      {
        question: "Is it medicated?",
        answer: "Standard bags are non-medicated. Medicated options are available by special order."
      },
      {
        question: "Can I feed this to adult cows?",
        answer: "You can, but it is higher protein/energy than a dry cow needs. It's great for a thin cow that needs to gain weight, but too expensive/rich for the whole herd."
      }
    ]
  },
  {
    id: 'lf-10',
    name: 'TMR Components & Minerals',
    slug: 'tmr-components-minerals',
    price: 30.00,
    image: '/images/products/tmr-components-minerals.jpg',
    topCategory: 'livestock-feed',
    tags: ['minerals'],
    description: 'Mineral mixes for TMR.',
    details: 'Essential vitamins and minerals to balance total mixed rations.',
    animal: 'Cattle',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: 'N/A',
    packaging: ['50lb Bag'],
    benefits: ['Complete nutrition', 'Prevents deficiencies'],
    bestSeller: false,
    longDescription: `
      <p>Balance your on-farm feed with our professional TMR Components & Minerals. If you mix your own feed using silage, hay, and commodity grains, you are likely missing the micro-nutrients that drive immunity, reproduction, and hoof health. Our mineral packs are the "missing link" to a complete ration.</p>
      <p><strong>Bioavailable Minerals:</strong> We use chelated (organic) trace minerals which are far more absorbable than standard sulfates or oxides. This means more mineral gets into the cow and less ends up in the manure.</p>
      <p><strong>Vitamin Boost:</strong> High levels of Vitamin A, D, and E are included to compensate for the degradation that happens in stored forages. Vitamin E is particularly crucial for immune function and meat quality.</p>
      <p><strong>Custom Solutions:</strong> We offer various packs—Breeder Pack (high phosphorus/zinc), Summer Pack (fescue toxicity support), and Feedlot Pack (thiamine for brain health).</p>
      <p><strong>Weatherized:</strong> Our free-choice mineral options are weatherized to resist caking in humidity or blowing away in the wind.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong></p>
      <ul>
        <li><strong>Mixing:</strong> Add to your TMR mixer wagon at the rate specified on the tag (usually 0.25 to 0.5 lbs per head).</li>
        <li><strong>Free Choice:</strong> For pasture cattle, offer in a covered mineral feeder. Cattle will consume what they need.</li>
        <li><strong>Salt:</strong> Some mixes contain salt, others do not. Check the tag to see if you need to provide a separate salt block.</li>
      </ul>
      <p><strong>Consumption:</strong> Target intake is typically 2-4 oz per head per day.</p>
    `,
    faqs: [
      {
        question: "Why won't my cows eat it?",
        answer: "If they are salt-starved, they might overeat. If they ignore it, they might be getting minerals elsewhere, or the block might be too hard. Try loose mineral."
      },
      {
        question: "Does it help with hoof rot?",
        answer: "Yes, adequate Zinc and Iodine levels are critical for skin and hoof integrity and can help reduce the incidence of foot rot."
      },
      {
        question: "Can sheep eat this?",
        answer: "CHECK THE TAG. Most cattle minerals contain copper which kills sheep. We have specific sheep minerals available."
      }
    ]
  },

  // --- Pig Feed (10 Products) ---
  {
    id: 'pg-1',
    name: 'Pig Grower Feed',
    slug: 'pig-grower-feed',
    price: 19.50,
    image: '/images/products/pig-grower-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['pig-grower'],
    description: 'Complete balanced ration.',
    details: 'Optimized for lean muscle growth in growing pigs.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Grower',
    protein: '16%',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Lean growth', 'Efficient conversion'],
    bestSeller: true,
    longDescription: `
      <p>Maximize lean muscle growth with our Pig Grower Feed, the industry standard for raising healthy, meaty pigs. Designed for the crucial growth phase from 50 lbs to 150 lbs, this 16% protein ration is precision-balanced to ensure that your pigs put on muscle, not just fat.</p>
      <p><strong>Amino Acid Balance:</strong> Pigs don't just need protein; they need specific amino acids like Lysine. Our formula is fortified with synthetic Lysine to ensure that the protein provided is fully utilized for muscle synthesis, improving feed efficiency and growth rates.</p>
      <p><strong>Gut Health:</strong> A healthy pig is a growing pig. We include a blend of probiotics and organic acids to maintain a low gut pH, which discourages harmful bacteria like E. coli and Salmonella while promoting beneficial flora.</p>
      <p><strong>Energy Density:</strong> Growing pigs have high energy needs. We use high-quality corn and soy oil to provide the calories needed for rapid growth without the bulk that can limit intake.</p>
      <p><strong>Consistent Quality:</strong> Our pelleted feed prevents sorting, ensuring that every pig gets a balanced diet with every bite. This reduces waste at the feeder and leads to more uniform growth across the herd.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed continuously as the sole ration to growing pigs.</p>
      <ul>
        <li><strong>Weight Range:</strong> Start feeding at approx 50 lbs body weight and continue until approx 150 lbs.</li>
        <li><strong>Access:</strong> Provide free-choice access in a self-feeder. Pigs should never run out of feed.</li>
        <li><strong>Water:</strong> Water is the most important nutrient. Ensure nipple drinkers are working and set at the correct height (shoulder height).</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> A pig will consume approx 3-5 lbs of feed per day during this stage.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to pot-bellied pigs?",
        answer: "No, this is a production feed designed for rapid growth. It will make pot-bellied pigs obese very quickly. Use a specific mini-pig feed instead."
      },
      {
        question: "Is it medicated?",
        answer: "Our standard grower is non-medicated. If you have issues with pneumonia or scours, consult your vet about medicated options."
      },
      {
        question: "How long does a bag last?",
        answer: "For one pig in the grower phase, a 50lb bag will last about 10-14 days."
      }
    ]
  },
  {
    id: 'pg-2',
    name: 'Organic Pig Feed',
    slug: 'organic-pig-feed',
    price: 28.00,
    image: '/images/products/organic-pig-feed.webp',
    topCategory: 'pig-feed',
    tags: ['organic-pig'],
    description: 'Organic certification focused.',
    details: 'Certified organic feed for sustainable pig farming.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '15%',
    packaging: ['50lb Bag'],
    benefits: ['Certified Organic', 'Non-GMO'],
    bestSeller: false,
    longDescription: `
      <p>Raise pork the natural way with our Certified Organic Pig Feed. Perfect for the smallholder or niche producer, this feed allows you to market your pork as organic and non-GMO. We use only certified organic grains and proteins, free from synthetic pesticides, herbicides, and GMOs.</p>
      <p><strong>Clean Nutrition:</strong> You are what you eat, and so are your pigs. Our feed contains no animal by-products, no antibiotics, and no artificial growth promoters. It relies on the natural goodness of organic corn, roasted soybeans, and a complete vitamin/mineral pack.</p>
      <p><strong>Versatile Formula:</strong> This 15% protein ration is designed as a "one-bag" solution for the organic homestead. It is suitable for growers, finishers, and gestating sows, simplifying your feed storage.</p>
      <p><strong>Taste & Texture:</strong> Organic pork is prized for its flavor. Our feed supports the development of firm, white fat and rich meat flavor that chefs and customers demand.</p>
      <p><strong>Sustainable:</strong> By choosing organic, you support farming systems that build soil health and protect water quality.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a complete ration.</p>
      <ul>
        <li><strong>Growers:</strong> Feed free-choice.</li>
        <li><strong>Sows:</strong> Limit feed to maintain body condition (approx 4-6 lbs/day for gestation).</li>
        <li><strong>Forage:</strong> This feed pairs excellently with pasture or vegetable scraps.</li>
      </ul>
      <p><strong>Storage:</strong> Store in a cool, dry place. Use within 3 months.</p>
    `,
    faqs: [
      {
        question: "Is it soy-free?",
        answer: "This formula contains organic soy. Soy is the best source of lysine for pigs. Soy-free options are available by special order but may result in slower growth."
      },
      {
        question: "Why is it meal instead of pellets?",
        answer: "Organic feeds are often sold as a mash or meal to reduce processing costs and heat damage to nutrients. It can be fed dry or wet."
      },
      {
        question: "Is it non-GMO?",
        answer: "Yes, all certified organic feed is strictly non-GMO."
      }
    ]
  },
  {
    id: 'pg-3',
    name: 'Piglet Starter Feed',
    slug: 'piglet-starter-feed',
    price: 26.00,
    image: '/images/products/piglet-starter-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['piglet-starter'],
    description: 'Weaner feed.',
    details: 'High digestibility to prevent weaning shock.',
    animal: 'Pig',
    weight: '25lb',
    minQuantity: '25lb',
    lifeStage: 'Starter',
    protein: '21%',
    packaging: ['25lb Bag'],
    benefits: ['Gut health', 'Rapid start'],
    bestSeller: false,
    longDescription: `
      <p>The most critical week in a pig's life is weaning week. Our Piglet Starter Feed is engineered to bridge the gap between sow's milk and dry grain, preventing the dreaded "weaning lag." This ultra-premium, 21% protein pellet is packed with highly digestible ingredients like whey protein, plasma, and cooked cereals.</p>
      <p><strong>Palatability First:</strong> If they don't eat it, it doesn't work. We use sweeteners and milk flavors to attract piglets to the feeder immediately. The small pellet size is perfect for tiny mouths.</p>
      <p><strong>Digestive Safety:</strong> A piglet's enzyme system is immature. We include acidifiers and enzymes to help them digest plant proteins and prevent scours (diarrhea), which is common at weaning.</p>
      <p><strong>Immune Boost:</strong> Weaning is stressful. Our feed is fortified with high levels of Zinc and Vitamin E to support the immune system when maternal antibodies are fading.</p>
      <p><strong>Rapid Growth:</strong> Early growth sets the pace for lifetime performance. Pigs that start strong finish faster.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as the sole ration to piglets from weaning (approx 3-4 weeks) until 25-30 lbs.</p>
      <ul>
        <li><strong>Creep Feeding:</strong> Can be offered in the farrowing crate from 10 days of age to get them used to it.</li>
        <li><strong>Hygiene:</strong> Feed small amounts frequently (3-4 times a day) to keep it fresh and clean.</li>
        <li><strong>Water:</strong> Ensure nipple drinkers are low enough for piglets to reach easily.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Approx 15-20 lbs per piglet during this phase.</p>
    `,
    faqs: [
      {
        question: "Does it contain milk?",
        answer: "Yes, it contains dried whey and lactose to mimic the sugar profile of sow's milk."
      },
      {
        question: "Is it medicated?",
        answer: "Yes, this starter usually contains a medication like Mecadox or CTC to prevent bacterial enteritis. Check the tag for specifics."
      },
      {
        question: "When do I switch?",
        answer: "Switch to Nursery or Grower feed when pigs reach about 25-30 lbs."
      }
    ]
  },
  {
    id: 'pg-4',
    name: 'Nursery Pig Feed',
    slug: 'nursery-pig-feed',
    price: 24.00,
    image: '/images/products/nursery-pig-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['nursery-pig'],
    description: 'Piglet post-weaning feed.',
    details: 'Supports the transition from starter to grower feed.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Nursery',
    protein: '19%',
    packaging: ['50lb Bag'],
    benefits: ['Continued growth', 'Health support'],
    bestSeller: false,
    longDescription: `
      <p>Keep the momentum going with our Nursery Pig Feed. Designed for the phase between the complex starter diets and the simpler grower diets (approx 25 lbs to 50 lbs), this 19% protein ration transitions the pig's digestive system from milk-based to grain-based nutrition.</p>
      <p><strong>Smooth Transition:</strong> Moving straight from a starter to a grower can cause a stall-out. Our Nursery feed gradually reduces the milk products while increasing the grain content, allowing the gut enzymes to adapt without stress.</p>
      <p><strong>High Energy:</strong> Nursery pigs are efficient converters. We provide high energy density to maximize this efficiency, resulting in excellent feed-to-gain ratios.</p>
      <p><strong>Respiratory Health:</strong> Nursery pigs are prone to respiratory issues. Our dust-free pellets help maintain air quality in the barn.</p>
      <p><strong>Cost Effective:</strong> It is less expensive than the complex Starter feed but more nutrient-dense than the Grower, optimizing your feed cost per pound of gain.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed continuously as the sole ration from 25 lbs to 50 lbs body weight.</p>
      <ul>
        <li><strong>Feeder Adjustment:</strong> Adjust feeders so that about 50% of the pan is covered with feed. This prevents waste while ensuring easy access.</li>
        <li><strong>Space:</strong> Ensure adequate feeder space to prevent fighting and tail biting.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> Approx 40-50 lbs of feed per pig during this stage.</p>
    `,
    faqs: [
      {
        question: "Can I skip this step?",
        answer: "You can, but you may see a growth lag. This step ensures a smooth transition and uniform herd."
      },
      {
        question: "Is it medicated?",
        answer: "Often yes, to control respiratory and gut diseases. Check the tag."
      }
    ]
  },
  {
    id: 'pg-5',
    name: 'Grower/Finisher Pig Feed',
    slug: 'grower-finisher-pig-feed',
    price: 18.50,
    image: '/images/products/grower-finisher-pig-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['pig-finisher'],
    description: 'Late stage growth feed.',
    details: 'Balances energy and protein for optimal finish.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Finisher',
    protein: '14%',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Weight gain', 'Meat quality'],
    bestSeller: false,
    longDescription: `
      <p>Finish strong with our Grower/Finisher Pig Feed. From 150 lbs to market weight (250+ lbs), the pig's protein requirement drops while energy needs remain high. Our 14% protein formula is perfectly tuned for this final sprint, ensuring you aren't paying for expensive protein that the pig can't use.</p>
      <p><strong>Fat Quality:</strong> We focus on the quality of the fat. By using specific grain sources, we promote firm, white fat rather than soft, oily fat, ensuring your pork carcasses grade well and process easily.</p>
      <p><strong>Economical:</strong> This is the stage where pigs eat the most. Our formula is designed to be the most cost-effective part of your program, maximizing your profit margin at slaughter.</p>
      <p><strong>Odor Control:</strong> We include Yucca extract to help bind ammonia and reduce manure odors, making for a more pleasant barn environment.</p>
      <p><strong>Meat Yield:</strong> Optimized amino acids support the retention of lean muscle mass even as the pig matures.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed free-choice from 150 lbs to market.</p>
      <ul>
        <li><strong>Withdrawal:</strong> If using medicated feeds previously, ensure you switch to this non-medicated finisher in time to meet withdrawal requirements. This feed has a 0-day withdrawal.</li>
        <li><strong>Heat Stress:</strong> Heavy pigs overheat easily. Ensure plenty of water and ventilation.</li>
      </ul>
      <p><strong>Estimated Consumption:</strong> A pig will eat 6-8 lbs per day at this stage.</p>
    `,
    faqs: [
      {
        question: "How long to reach market weight?",
        answer: "On this program, a pig should reach 250 lbs by 5.5 to 6 months of age."
      },
      {
        question: "Can I feed this to sows?",
        answer: "It's okay for gestating sows in a pinch, but Lactation feed is better for nursing sows."
      }
    ]
  },
  {
    id: 'pg-6',
    name: 'Sow Gestation Feed',
    slug: 'sow-gestation-feed',
    price: 18.00,
    image: '/images/products/sow-gestation-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['sow-gestation'],
    description: 'Pregnant sow feed.',
    details: 'Maintains body condition during pregnancy.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Adult',
    protein: '13%',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Sow health', 'Fetal development'],
    bestSeller: false,
    longDescription: `
      <p>Support the foundation of your herd with our Sow Gestation Feed. A healthy litter starts long before farrowing day. Our 13% protein gestation diet is scientifically formulated to maintain the sow in ideal body condition while supporting the development of strong, viable fetuses.</p>
      <p><strong>Condition Management:</strong> Over-conditioned (fat) sows have trouble farrowing and eat less during lactation. Under-conditioned (thin) sows have smaller litters and rebreed poorly. Our high-fiber, nutrient-dense formula allows you to feed enough volume to keep the sow satisfied without making her obese.</p>
      <p><strong>Fetal Programming:</strong> The nutrients the sow eats determine the muscle fiber number and potential of her piglets. We include organic trace minerals and high levels of Vitamin E to maximize fetal development and vigor at birth.</p>
      <p><strong>Hoof Health:</strong> Sows carry a lot of weight. We fortify our feed with Biotin and Zinc to ensure strong hooves and prevent lameness, which is a major cause of early culling.</p>
      <p><strong>Constipation Prevention:</strong> Farrowing constipation is a common issue. Our bulkier, high-fiber ration keeps the digestive tract moving, ensuring a smoother farrowing process.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Limit feed to maintain body condition score (BCS) of 3/5.</p>
      <ul>
        <li><strong>Gilts:</strong> Feed approx 5-6 lbs per day to support their own growth plus pregnancy.</li>
        <li><strong>Sows:</strong> Feed approx 4-5 lbs per day depending on weather and condition.</li>
        <li><strong>Late Gestation:</strong> Increase feed by 1-2 lbs in the last 2 weeks of pregnancy to support rapid fetal growth.</li>
      </ul>
      <p><strong>Water:</strong> Always provide fresh water.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to lactating sows?",
        answer: "No, it is too low in energy and protein. Lactating sows need our Lactation Feed to produce enough milk."
      },
      {
        question: "Why limit feed?",
        answer: "Sows will eat until they are obese if allowed. Obesity causes farrowing difficulties and crushed piglets."
      }
    ]
  },
  {
    id: 'pg-7',
    name: 'Sow Lactation Feed',
    slug: 'sow-lactation-feed',
    price: 20.00,
    image: '/images/products/sow-lactation-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['sow-lactation'],
    description: 'Milk production feed.',
    details: 'High energy and protein to support milk production.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Lactating',
    protein: '17%',
    packaging: ['50lb Bag', 'Bulk'],
    benefits: ['Milk yield', 'Piglet weight'],
    bestSeller: false,
    longDescription: `
      <p>Maximize weaning weights with our Sow Lactation Feed. Lactation is the most metabolically demanding phase of a sow's life. She needs to produce gallons of milk while maintaining her own body reserves for the next breeding cycle. Our 17% protein, high-energy formula is up to the task.</p>
      <p><strong>Milk Output:</strong> More milk means heavier piglets. We use high-quality amino acids and energy sources to drive maximum milk production.</p>
      <p><strong>Sow Condition:</strong> If a sow loses too much weight during lactation, she won't breed back quickly. Our dense energy formula helps minimize weight loss, ensuring a rapid return to estrus (heat) after weaning.</p>
      <p><strong>Appetite Support:</strong> Sows often go off feed in hot weather. We use palatable ingredients and gut health additives to encourage maximum feed intake even in summer.</p>
      <p><strong>Laxative Effect:</strong> To prevent constipation and mastitis-metritis-agalactia (MMA) syndrome, we include mild laxative ingredients like wheat bran or beet pulp.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed ad-libitum (free choice) during lactation.</p>
      <ul>
        <li><strong>Ramp Up:</strong> Start with 4-5 lbs on day 1 of farrowing and increase by 2-3 lbs per day until she is eating as much as she wants.</li>
        <li><strong>Target:</strong> A sow should eat approx 4-5 lbs for herself plus 1 lb for every piglet she is nursing. A sow with 10 piglets may eat 15+ lbs per day!</li>
        <li><strong>Water:</strong> Milk is mostly water. Ensure high flow rate nipple drinkers.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Can I feed this to growers?",
        answer: "Yes, it's actually a great grower feed too, though slightly more expensive than standard grower."
      },
      {
        question: "When do I switch back to Gestation feed?",
        answer: "Switch back on the day of weaning to help dry her off."
      }
    ]
  },
  {
    id: 'pg-8',
    name: 'Boar Feed',
    slug: 'boar-feed',
    price: 19.00,
    image: '/images/products/boar-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['boar-feed'],
    description: 'Breeding male feed.',
    details: 'Maintains vigor and fertility in breeding boars.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Adult',
    protein: '15%',
    packaging: ['50lb Bag'],
    benefits: ['Fertility', 'Condition'],
    bestSeller: false,
    longDescription: `
      <p>Keep your herd sires in top form with our specialized Boar Feed. Boars have unique needs—they must be fit, not fat, and maintain high libido and semen quality. Our 15% protein ration provides the specific balance of nutrients required for male reproductive health.</p>
      <p><strong>Fertility Boost:</strong> We fortify this feed with high levels of Selenium, Vitamin E, and Zinc, all of which are critical for sperm production and motility.</p>
      <p><strong>Joint Health:</strong> Boars are heavy animals that need to mount sows. We include minerals and vitamins that support strong bones and healthy joints to ensure longevity in the herd.</p>
      <p><strong>Condition Control:</strong> Like gestation feed, this is a high-fiber ration designed to satisfy appetite without packing on excess fat that would make the boar lazy or too heavy to use.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Limit feed to maintain active condition.</p>
      <ul>
        <li><strong>Young Boars:</strong> Feed 5-6 lbs per day during development.</li>
        <li><strong>Adult Boars:</strong> Feed 4-6 lbs per day depending on workload and weather. Increase slightly during heavy breeding seasons.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Can I just feed him gestation feed?",
        answer: "You can, but gestation feed is designed for female reproduction. Boar feed has higher zinc and different amino acid ratios for male health."
      }
    ]
  },
  {
    id: 'pg-9',
    name: 'Piglet Creep Feed',
    slug: 'piglet-creep-feed',
    price: 28.00,
    image: '/images/products/piglet-creep-feed.jpg',
    topCategory: 'pig-feed',
    tags: ['piglet-creep'],
    description: 'Supplemental early feed.',
    details: 'Introduces solid food to nursing piglets.',
    animal: 'Pig',
    weight: '25lb',
    minQuantity: '25lb',
    lifeStage: 'Nursing',
    protein: '22%',
    packaging: ['25lb Bag'],
    benefits: ['Early intake', 'Faster growth'],
    bestSeller: false,
    longDescription: `
      <p>Jumpstart your piglets' digestive systems with our Piglet Creep Feed. Designed to be offered while piglets are still nursing, this ultra-palatable micro-pellet teaches them to eat dry food, making the eventual weaning process much less stressful.</p>
      <p><strong>Irresistible Taste:</strong> We use a complex blend of milk proteins, cooked cereals, and sweeteners to entice piglets to nibble.</p>
      <p><strong>Gut Development:</strong> Even small amounts of creep feed stimulate enzyme production in the gut, preparing the piglet for a life of grain digestion.</p>
      <p><strong>Heavier Weaning Weights:</strong> Piglets that eat creep feed are significantly heavier at weaning than those that rely solely on milk.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Offer small amounts in a shallow pan in the creep area (away from the sow) starting at 7-10 days of age.</p>
      <ul>
        <li><strong>Freshness:</strong> Replace daily. Piglets won't eat stale or soiled feed.</li>
        <li><strong>Quantity:</strong> They will only eat ounces at first. The goal is education, not volume.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Is it worth the cost?",
        answer: "Yes. It is expensive per pound, but you use very little. The benefit in weaning weight and reduced stress pays for itself many times over."
      }
    ]
  },
  {
    id: 'pg-10',
    name: 'Reduced-Protein Pig Feed',
    slug: 'reduced-protein-pig-feed',
    price: 21.00,
    image: '/images/products/reduced-protein-pig-feed.webp',
    topCategory: 'pig-feed',
    tags: ['reduced-protein'],
    description: 'Environment-friendly feed.',
    details: 'Formulated to reduce nitrogen excretion while maintaining performance.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Grower/Finisher',
    protein: '14%',
    packaging: ['50lb Bag'],
    benefits: ['Eco-friendly', 'Efficient'],
    bestSeller: false,
    longDescription: `
      <p>Farm responsibly with our Reduced-Protein "Eco" Pig Feed. Modern nutritional science allows us to lower the total crude protein of the diet while maintaining performance by supplementing with specific crystalline amino acids. This results in less nitrogen in the manure, which is better for the environment and reduces ammonia levels in your barn.</p>
      <p><strong>Precision Nutrition:</strong> Instead of overfeeding protein to meet amino acid needs, we balance the diet precisely. This is the most advanced way to feed pigs.</p>
      <p><strong>Better Air Quality:</strong> Less nitrogen excreted means less ammonia generated. Your pigs (and you) will breathe easier.</p>
      <p><strong>Same Performance:</strong> Studies show that pigs on balanced low-protein diets grow just as fast as those on standard diets.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a standard grower/finisher ration from 50 lbs to market.</p>
      <ul>
        <li><strong>Management:</strong> No special management required. Feed free-choice.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Will my pigs grow slower?",
        answer: "No. Because we add the specific amino acids they need, they grow at the same rate as on high-protein feed."
      }
    ]
  },

  // --- Organic Feed (10 Products) ---
  {
    id: 'of-1',
    name: 'Organic Poultry Feed',
    slug: 'organic-poultry-feed-main',
    price: 32.00,
    image: '/images/products/organic-poultry-feed-main.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-poultry'],
    description: 'Non-GMO Chicken Feed.',
    details: 'Complete organic nutrition for your flock.',
    animal: 'Chicken',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'All Stages',
    protein: '17%',
    packaging: ['40lb Bag'],
    benefits: ['Certified Organic', 'Healthy flock'],
    bestSeller: true,
    longDescription: `
      <p>Embrace the purity of nature with our Organic Poultry Feed. This is our flagship organic product, designed for the conscious keeper who wants the absolute best for their flock and their family. Certified by USDA accredited agencies, this feed is free from GMOs, synthetic pesticides, and artificial additives.</p>
      <p><strong>Whole Grain Goodness:</strong> We use a blend of organic corn, roasted soybeans, wheat, and barley to create a texture that chickens love. The grains are cracked and mashed to optimal size for digestion.</p>
      <p><strong>Nutrient Dense:</strong> Organic doesn't mean "less than." Our feed is fortified with a compliant vitamin and mineral pack to ensure your birds get 100% of their daily requirements for health and egg production.</p>
      <p><strong>Soy-Based Protein:</strong> We use organic roasted soybeans as our primary protein source. Soy provides the most complete amino acid profile for poultry, ensuring strong growth and feathering.</p>
      <p><strong>Peace of Mind:</strong> Know exactly what is going into your food chain. No glyphosate, no antibiotics, no animal by-products. Just clean, honest feed.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed free-choice to adult poultry.</p>
      <ul>
        <li><strong>Layer Hens:</strong> This is a complete feed for layers.</li>
        <li><strong>Meat Birds:</strong> Suitable for slow-growing heritage meat birds. For Cornish Cross, we recommend our higher protein Organic Broiler feed.</li>
        <li><strong>Storage:</strong> Organic feed has a shorter shelf life (3-4 months). Buy what you can use in a month.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Is it non-GMO?",
        answer: "Yes, 100%."
      },
      {
        question: "Why is the color different from bag to bag?",
        answer: "Natural variations in organic grain crops can cause slight color changes. This is normal and does not affect quality."
      }
    ]
  },
  {
    id: 'of-2',
    name: 'Organic Layer Feed',
    slug: 'organic-layer-feed',
    price: 33.00,
    image: '/images/products/organic-layer-feed.webp',
    topCategory: 'organic-feed',
    tags: ['organic-layer'],
    description: 'Organic feed for layers.',
    details: 'Supports organic egg production.',
    animal: 'Chicken',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'Layer',
    protein: '16%',
    packaging: ['40lb Bag'],
    benefits: ['Organic eggs', 'Strong shells'],
    bestSeller: false,
    longDescription: `
      <p>Produce the finest organic eggs with our Organic Layer Feed. Specifically formulated for laying hens, this 16% protein ration includes extra calcium for strong shells and organic flaxseed for omega-3 enrichment.</p>
      <p><strong>Shell Strength:</strong> We use a blend of organic-approved calcium sources to ensure your eggs make it from the nest box to the carton without cracking.</p>
      <p><strong>Yolk Color:</strong> Natural carotenoids from organic alfalfa and corn give yolks a rich, deep color.</p>
      <p><strong>Health:</strong> Fortified with probiotics to support gut health and nutrient absorption.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed to hens from 18 weeks of age.</p>
      <ul>
        <li><strong>Rate:</strong> Approx 0.25 lbs per bird per day.</li>
        <li><strong>Oyster Shell:</strong> Offer free choice oyster shell on the side.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Can I ferment this feed?",
        answer: "Yes! This mash/crumble texture is perfect for fermentation."
      }
    ]
  },
  {
    id: 'of-3',
    name: 'Organic Broiler Feed',
    slug: 'organic-broiler-feed',
    price: 34.00,
    image: '/images/products/organic-broiler-feed.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-broiler'],
    description: 'Organic meat bird feed.',
    details: 'For raising organic meat chickens.',
    animal: 'Chicken',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'Grower',
    protein: '20%',
    packaging: ['40lb Bag'],
    benefits: ['Organic meat', 'Fast growth'],
    bestSeller: false,
    longDescription: `
      <p>Raise premium organic meat birds with our Organic Broiler Feed. This high-protein (20%) formula provides the energy and amino acids needed for rapid growth in meat breeds, without the use of synthetic growth promoters.</p>
      <p><strong>Fast Growth:</strong> Even without antibiotics, our balanced organic formula supports impressive growth rates.</p>
      <p><strong>Meat Quality:</strong> Produces meat with excellent texture and flavor.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed from day 1 to finish for heritage breeds. For Cornish Cross, feed from day 1 to week 4, then mix with lower protein feed or limit feed to prevent leg issues.</p>
    `,
    faqs: [
      {
        question: "Is it medicated?",
        answer: "No. Organic standards prohibit medicated feed. Good management is essential."
      }
    ]
  },
  {
    id: 'of-4',
    name: 'Organic Cattle Feed',
    slug: 'organic-cattle-feed',
    price: 30.00,
    image: '/images/products/organic-cattle-feed.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-cattle'],
    description: 'Organic beef and dairy feed.',
    details: 'Certified organic grain mix for cattle.',
    animal: 'Cattle',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '14%',
    packaging: ['50lb Bag'],
    benefits: ['Certified Organic', 'Natural'],
    bestSeller: false,
    longDescription: `
      <p>Supplement your organic herd with our Organic Cattle Feed. Whether for dairy or beef, this 14% protein grain mix provides the energy needed to balance a forage-based diet.</p>
      <p><strong>Energy Boost:</strong> Perfect for finishing organic steers or supporting milk production in organic dairy cows.</p>
      <p><strong>Palatable:</strong> A blend of organic corn, barley, and oats that cattle love.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a supplement to hay/pasture.</p>
      <ul>
        <li><strong>Rate:</strong> 1-2% of body weight depending on goals.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Does it contain urea?",
        answer: "No. Urea is not allowed in organic feed."
      }
    ]
  },
  {
    id: 'of-5',
    name: 'Organic Pig Feed',
    slug: 'organic-pig-feed-main',
    price: 29.00,
    image: '/images/products/organic-pig-feed-main.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-pig'],
    description: 'Organic swine feed.',
    details: 'Complete organic ration for pigs.',
    animal: 'Pig',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '15%',
    packaging: ['50lb Bag'],
    benefits: ['Certified Organic', 'Healthy pigs'],
    bestSeller: false,
    longDescription: `
      <p>Our Organic Pig Feed is a versatile, all-purpose ration for the organic pig farm. Suitable for growers and sows, it simplifies your feeding program while ensuring compliance with organic standards.</p>
      <p><strong>Complete Nutrition:</strong> Balanced with organic vitamins and minerals.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed free choice to growers. Limit feed for sows.</p>
    `,
    faqs: [
      {
        question: "Is it GMO free?",
        answer: "Yes, 100%."
      }
    ]
  },
  {
    id: 'of-6',
    name: 'Organic Goat & Sheep Feed',
    slug: 'organic-goat-sheep-feed',
    price: 31.00,
    image: '/images/products/organic-goat-sheep-feed.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-goat-sheep'],
    description: 'Organic small ruminant feed.',
    details: 'Safe and nutritious for goats and sheep.',
    animal: 'Goat/Sheep',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'All Stages',
    protein: '15%',
    packaging: ['40lb Bag'],
    benefits: ['Certified Organic', 'Versatile'],
    bestSeller: false,
    longDescription: `
      <p>Feed your small ruminants with confidence using our Organic Goat & Sheep Feed. This copper-safe formula is designed to be a universal feed for mixed flocks of goats and sheep, providing essential organic nutrition without the risk of copper toxicity.</p>
      <p><strong>Copper Safe:</strong> Formulated with no added copper to ensure safety for sheep, while still providing a balanced diet for goats when fed with quality forage.</p>
      <p><strong>Milk & Meat:</strong> Supports both dairy and meat production in organic systems.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a supplement to hay/pasture.</p>
      <ul>
        <li><strong>Rate:</strong> 0.5 to 1.0 lbs per head per day.</li>
        <li><strong>Goats:</strong> May need a copper bolus supplement if fed this long-term, as it is low copper for sheep safety.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Is it safe for sheep?",
        answer: "Yes, absolutely."
      }
    ]
  },
  {
    id: 'of-7',
    name: 'Organic Rabbit Feed',
    slug: 'organic-rabbit-feed',
    price: 25.00,
    image: '/images/products/organic-rabbit-feed.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-rabbit'],
    description: 'Organic rabbit pellets.',
    details: 'High fiber organic diet for rabbits.',
    animal: 'Rabbit',
    weight: '25lb',
    minQuantity: '25lb',
    lifeStage: 'All Stages',
    protein: '16%',
    packaging: ['25lb Bag'],
    benefits: ['Digestive health', 'Organic'],
    bestSeller: false,
    longDescription: `
      <p>Give your rabbits the best with our Organic Rabbit Feed. Made from organic alfalfa meal and grains, this firm pellet provides the high fiber needed for rabbit digestive health.</p>
      <p><strong>Fiber First:</strong> Rabbits need fiber to prevent stasis. Our alfalfa-based formula ensures gut motility.</p>
      <p><strong>Firm Pellets:</strong> Good for dental health, helping to wear down continuously growing teeth.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed approx 1/4 to 1/2 cup per 6 lbs of body weight daily.</p>
      <ul>
        <li><strong>Hay:</strong> Always provide unlimited grass hay.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Is it corn-free?",
        answer: "Check the tag. Some formulas use corn, others use oats/barley."
      }
    ]
  },
  {
    id: 'of-8',
    name: 'Organic Certified Feed Pellets',
    slug: 'organic-certified-pellets',
    price: 28.00,
    image: '/images/products/organic-certified-pellets.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-pellets'],
    description: 'General purpose organic pellets.',
    details: 'Suitable for various farm animals requiring organic feed.',
    animal: 'Multi-Species',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '14%',
    packaging: ['50lb Bag'],
    benefits: ['Certified Organic', 'Convenient'],
    bestSeller: false,
    longDescription: `
      <p>The ultimate convenience for the organic homestead: Organic All-Stock Pellets. Safe for cattle, horses, goats, sheep, and pigs, this feed allows you to buy one bag for the whole barn.</p>
      <p><strong>Simplicity:</strong> No need to store 5 different bags.</p>
      <p><strong>Safety:</strong> No added copper, no urea, no ionophores.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a supplement.</p>
      <ul>
        <li><strong>Rate:</strong> 1-2% of body weight generally.</li>
      </ul>
    `,
    faqs: [
      {
        question: "Is it safe for horses?",
        answer: "Yes."
      }
    ]
  },
  {
    id: 'of-9',
    name: 'Organic Feed Supplements',
    slug: 'organic-feed-supplements',
    price: 40.00,
    image: '/images/products/organic-feed-supplements.jpg',
    topCategory: 'organic-feed',
    tags: ['organic-supplements'],
    description: 'Mineral mix.',
    details: 'Organic approved vitamin and mineral supplementation.',
    animal: 'Multi-Species',
    weight: '25lb',
    minQuantity: '25lb',
    lifeStage: 'All Stages',
    protein: 'N/A',
    packaging: ['25lb Bag'],
    benefits: ['Health boost', 'Organic approved'],
    bestSeller: false,
    longDescription: `
      <p>Ensure your organic animals aren't missing out. Our Organic Feed Supplements provide the trace minerals and vitamins that are often low in organic forages.</p>
      <p><strong>Compliance:</strong> Fully approved for use in certified organic systems.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Offer free choice or mix into feed.</p>
    `,
    faqs: [
      {
        question: "Is salt included?",
        answer: "Yes, usually."
      }
    ]
  },
  {
    id: 'of-10',
    name: 'Non-GMO Forage Pellets',
    slug: 'non-gmo-forage-pellets',
    price: 22.00,
    image: '/images/products/non-gmo-forage-pellets.jpg',
    topCategory: 'organic-feed',
    tags: ['non-gmo-forage'],
    description: 'Non-GMO fiber source.',
    details: 'High quality forage pellets without GMOs.',
    animal: 'Multi-Species',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '12%',
    packaging: ['50lb Bag'],
    benefits: ['Non-GMO', 'High fiber'],
    bestSeller: false,
    longDescription: `
      <p>Extend your pastures with Non-GMO Forage Pellets. Made from non-GMO alfalfa and grasses, these pellets are perfect for times of drought or winter feeding.</p>
      <p><strong>Clean Fiber:</strong> No GMOs, just grass.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a hay replacement.</p>
    `,
    faqs: [
      {
        question: "Do I need to soak them?",
        answer: "Recommended for horses."
      }
    ]
  },

  // --- Specialty Feed (9 Products) ---
  {
    id: 'sf-1',
    name: 'Rabbit Feed Pellets',
    slug: 'rabbit-feed-pellets',
    price: 16.00,
    image: '/images/products/rabbit-feed-pellets.jpg',
    topCategory: 'specialty-feed',
    tags: ['rabbit-feed'],
    description: 'Complete feed for rabbits.',
    details: 'Alfalfa-based pellets for optimal rabbit health.',
    animal: 'Rabbit',
    weight: '25lb',
    minQuantity: '25lb',
    lifeStage: 'All Stages',
    protein: '16%',
    packaging: ['25lb Bag', '50lb Bag'],
    benefits: ['Digestive health', 'Firm pellets'],
    bestSeller: true,
    longDescription: `
      <p>Keep your bunnies hopping with our Premium Rabbit Feed Pellets. Rabbits have incredibly sensitive digestive systems that require a steady intake of high-quality fiber. Our alfalfa-based pellet is formulated to provide that fiber foundation while delivering the protein and vitamins needed for soft fur, bright eyes, and boundless energy.</p>
      <p><strong>Fiber is King:</strong> The #1 cause of health issues in rabbits is GI stasis. Our feed is high in fiber to keep the gut moving. We use sun-cured alfalfa meal as the primary ingredient, which is naturally rich in fiber and calcium.</p>
      <p><strong>Dental Health:</strong> Rabbit teeth never stop growing. Our firm, durable pellets require chewing, which helps wear down teeth naturally and prevents painful dental spurs.</p>
      <p><strong>No Corn Formula:</strong> Many rabbits are sensitive to corn. Our premium formula is corn-free to reduce the risk of digestive upset and obesity.</p>
      <p><strong>Odor Control:</strong> We include Yucca Schidigera extract, a natural ingredient that binds ammonia in the urine, significantly reducing hutch odors.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a supplement to unlimited grass hay.</p>
      <ul>
        <li><strong>Adults:</strong> Feed 1/4 to 1/2 cup of pellets per 6 lbs of body weight per day.</li>
        <li><strong>Juniors (under 6 months):</strong> Feed free-choice alfalfa pellets and alfalfa hay to support rapid growth.</li>
        <li><strong>Hay:</strong> Timothy or Orchard grass hay should make up 80% of the adult rabbit's diet. Pellets are the "side dish."</li>
      </ul>
      <p><strong>Water:</strong> Rabbits drink a lot of water. Use water bottles or heavy crocks that can't be tipped over.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to guinea pigs?",
        answer: "No. Guinea pigs need added Vitamin C, which rabbit feed does not have. Feeding rabbit pellets to guinea pigs can cause scurvy."
      },
      {
        question: "Why are there no colorful bits?",
        answer: "Those colorful bits (muesli) encourage selective feeding where the rabbit picks out the sugary junk and leaves the healthy pellets. A uniform pellet prevents this and ensures balanced nutrition."
      }
    ]
  },
  {
    id: 'sf-2',
    name: 'Game Bird Feed',
    slug: 'game-bird-feed-specialty',
    price: 23.00,
    image: '/images/products/game-bird-feed-specialty.jpg',
    topCategory: 'specialty-feed',
    tags: ['game-bird'],
    description: 'Pheasant and quail feed.',
    details: 'Specialized nutrition for game birds.',
    animal: 'Bird',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'All Stages',
    protein: '20%',
    packaging: ['40lb Bag'],
    benefits: ['Plumage', 'Growth'],
    bestSeller: false,
    longDescription: `
      <p>Whether for release, show, or meat, our Game Bird Feed delivers the results you need. This 20% protein ration is designed for pheasants, quail, chukars, and guinea fowl, supporting their high metabolic rates and need for rapid feather development.</p>
      <p><strong>Flight Ready:</strong> Lean muscle is essential for flight. Our balanced amino acid profile builds strength without excess fat.</p>
      <p><strong>Feathering:</strong> High levels of methionine and cystine ensure beautiful, weather-resistant plumage.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed free choice to adult game birds.</p>
    `,
    faqs: [
      {
        question: "Is it medicated?",
        answer: "No."
      }
    ]
  },
  {
    id: 'sf-3',
    name: 'Pet Bird Food',
    slug: 'pet-bird-food',
    price: 12.00,
    image: '/images/products/pet-bird-food.jpg',
    topCategory: 'specialty-feed',
    tags: ['pet-bird'],
    description: 'Parrot & ornamental bird feed.',
    details: 'Premium seed and pellet mix for pet birds.',
    animal: 'Bird',
    weight: '5lb',
    minQuantity: '5lb',
    lifeStage: 'Adult',
    protein: '12%',
    packaging: ['5lb Bag'],
    benefits: ['Vibrant colors', 'Health'],
    bestSeller: false,
    longDescription: `
      <p>Bring out the best in your feathered friends with our Premium Pet Bird Food. A gourmet blend of seeds, nuts, fruits, and fortified pellets, this mix offers both the variety birds crave and the nutrition they need.</p>
      <p><strong>Enrichment:</strong> Foraging is natural. Our mix encourages birds to sort and hull seeds, keeping them mentally stimulated.</p>
      <p><strong>Fortified:</strong> Seeds alone are not enough. We include vitamin-enriched pellets to prevent common deficiencies like Vitamin A deficiency.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Fill cup daily. Remove empty hulls.</p>
    `,
    faqs: [
      {
        question: "Is this for large or small birds?",
        answer: "This blend is for medium birds (Cockatiels, Conures). We have other blends for Parrots or Finches."
      }
    ]
  },
  {
    id: 'sf-4',
    name: 'Guinea Pig & Chinchilla Feed',
    slug: 'guinea-pig-chinchilla-feed',
    price: 14.00,
    image: '/images/products/guinea-pig-chinchilla-feed.jpg',
    topCategory: 'specialty-feed',
    tags: ['guinea-pig'],
    description: 'Vitamin C fortified.',
    details: 'Essential nutrition for guinea pigs and chinchillas.',
    animal: 'Small Pet',
    weight: '10lb',
    minQuantity: '10lb',
    lifeStage: 'All Stages',
    protein: '14%',
    packaging: ['10lb Bag'],
    benefits: ['Vitamin C', 'Fiber'],
    bestSeller: false,
    longDescription: `
      <p>Healthy cavies need Vitamin C! Our Guinea Pig & Chinchilla Feed is fortified with stabilized Vitamin C, which guinea pigs cannot make on their own. Without it, they can develop scurvy.</p>
      <p><strong>Timothy Based:</strong> Made with Timothy hay, which is lower in calcium than alfalfa, preventing bladder stones in adult animals.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed 1/8 to 1/4 cup daily along with unlimited Timothy hay.</p>
    `,
    faqs: [
      {
        question: "Does the Vitamin C expire?",
        answer: "Stabilized Vitamin C lasts longer, but we recommend using the bag within 90 days of opening."
      }
    ]
  },
  {
    id: 'sf-5',
    name: 'Exotic Pet Animal Feed',
    slug: 'exotic-pet-animal-feed',
    price: 25.00,
    image: '/images/products/exotic-pet-animal-feed.jpg',
    topCategory: 'specialty-feed',
    tags: ['exotic-pet'],
    description: 'For unique dietary needs.',
    details: 'Specialized formula for exotic pets.',
    animal: 'Exotic',
    weight: '20lb',
    minQuantity: '20lb',
    lifeStage: 'All Stages',
    protein: 'Varies',
    packaging: ['20lb Bag'],
    benefits: ['Specialized', 'Balanced'],
    bestSeller: false,
    longDescription: `
      <p>Special care for special animals. Our Exotic Pet Feed is designed for mini-pigs, hedgehogs, and other unique companions.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Consult your vet.</p>
    `,
    faqs: [
      {
        question: "What animals is this for?",
        answer: "Please check the specific label sticker on the bag."
      }
    ]
  },
  {
    id: 'sf-6',
    name: 'Ostrich & Large Bird Feed',
    slug: 'ostrich-large-bird-feed',
    price: 35.00,
    image: '/images/products/ostrich-large-bird-feed.jpg',
    topCategory: 'specialty-feed',
    tags: ['ostrich'],
    description: 'Ratite feed.',
    details: 'High energy feed for ostriches and emus.',
    animal: 'Ostrich',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'All Stages',
    protein: '18%',
    packaging: ['50lb Bag'],
    benefits: ['Growth', 'Leg health'],
    bestSeller: false,
    longDescription: `
      <p>Fuel the giants of the bird world with our Ostrich & Large Bird Feed. Ratites (ostriches, emus, rheas) have unique nutritional requirements, particularly during their rapid growth phases where leg health is critical.</p>
      <p><strong>Leg Strength:</strong> We fortify this feed with specific levels of calcium, phosphorus, and Vitamin D3 to support the massive skeletal growth required to support an adult ostrich.</p>
      <p><strong>Digestibility:</strong> High-fiber pellets are designed for the large hindgut fermentation system of ratites.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed free choice to growing birds. Limit feed for adults to prevent obesity.</p>
    `,
    faqs: [
      {
        question: "Can I feed this to emus?",
        answer: "Yes, it is perfect for emus."
      }
    ]
  },
  {
    id: 'sf-7',
    name: 'Aquaculture Feed',
    slug: 'aquaculture-feed',
    price: 40.00,
    image: '/images/products/aquaculture-feed.jpg',
    topCategory: 'specialty-feed',
    tags: ['aquaculture'],
    description: 'Fish feed.',
    details: 'Floating pellets for pond fish.',
    animal: 'Fish',
    weight: '40lb',
    minQuantity: '40lb',
    lifeStage: 'All Stages',
    protein: '32%',
    packaging: ['40lb Bag'],
    benefits: ['Floating', 'High protein'],
    bestSeller: false,
    longDescription: `
      <p>Grow bigger fish faster with our Aquaculture Feed. Whether you are raising catfish, tilapia, or bass, this high-protein floating pellet ensures maximum intake and minimal waste.</p>
      <p><strong>Floating Action:</strong> Pellets float for 20+ minutes, allowing you to observe feeding behavior and prevent water pollution from sinking uneaten feed.</p>
      <p><strong>High Protein:</strong> 32% protein from fish meal and soy supports rapid muscle growth.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as much as fish will consume in 15 minutes, once or twice daily.</p>
    `,
    faqs: [
      {
        question: "Will it cloud the water?",
        answer: "No, it is very stable in water."
      }
    ]
  },
  {
    id: 'sf-8',
    name: 'Hand-Fed Baby Bird Feed',
    slug: 'hand-fed-baby-bird',
    price: 18.00,
    image: '/images/products/hand-fed-baby-bird.webp',
    topCategory: 'specialty-feed',
    tags: ['hand-fed'],
    description: 'Nectar feed.',
    details: 'Formula for hand-rearing baby birds.',
    animal: 'Bird',
    weight: '2lb',
    minQuantity: '2lb',
    lifeStage: 'Baby',
    protein: '20%',
    packaging: ['2lb Tub'],
    benefits: ['Easy mix', 'Complete'],
    bestSeller: false,
    longDescription: `
      <p>Raise healthy, tame hand-fed babies with our Hand-Feeding Formula. This fine powder mixes easily with warm water to create a smooth, creamy nutrient-rich slurry that mimics crop milk.</p>
      <p><strong>Digestive Enzymes:</strong> Includes enzymes to help the baby digest food before its own system is fully functional.</p>
      <p><strong>Growth:</strong> High fat and protein for rapid weight gain.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Mix with warm water (105°F) to consistency of pudding. Feed with syringe.</p>
    `,
    faqs: [
      {
        question: "What temperature?",
        answer: "Must be between 102-108°F. Too cold causes stasis, too hot causes crop burn."
      }
    ]
  },
  {
    id: 'sf-9',
    name: 'Show Animal Performance Feed',
    slug: 'show-animal-performance',
    price: 30.00,
    image: '/images/products/show-animal-performance.jpg',
    topCategory: 'specialty-feed',
    tags: ['show-animal'],
    description: 'For competition animals.',
    details: 'Premium nutrition for show-quality condition.',
    animal: 'Multi-Species',
    weight: '50lb',
    minQuantity: '50lb',
    lifeStage: 'Adult',
    protein: '16%',
    packaging: ['50lb Bag'],
    benefits: ['Coat shine', 'Muscle tone'],
    bestSeller: false,
    longDescription: `
      <p>Get to the winner's circle with our Show Animal Performance Feed. When appearance matters, this feed delivers. High in fat for coat shine and amino acids for muscle expression.</p>
      <p><strong>Bloom:</strong> Added vegetable oils create a slick, shiny coat.</p>
      <p><strong>Fill:</strong> Beet pulp provides body depth and "fill" without fat.</p>
    `,
    feedingGuide: `
      <p><strong>Feeding Instructions:</strong> Feed as a top dress or complete ration during show season.</p>
    `,
    faqs: [
      {
        question: "Is it safe for sheep?",
        answer: "Check tag for copper levels."
      }
    ]
  }
];

// Populate products array in categories for compatibility
categories.forEach(cat => {
  cat.products = products.filter(p => p.topCategory === cat.slug);
});