export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Maximizing Milk Yield in Dairy Cattle',
    slug: 'maximizing-milk-yield-dairy-cattle',
    excerpt: 'Practical nutrition tweaks that improve output without stressing the herd.',
    content: `
      <p>Dairy farming is a balancing act between high production and herd health. One of the most critical factors in this equation is nutrition. In this article, we explore how adjusting your feed ration can lead to significant improvements in milk yield.</p>

      <h3>The Role of Protein</h3>
      <p>Protein is the building block of milk. However, simply increasing crude protein isn't always the answer. It's about the <em>quality</em> of protein and the balance of amino acids. High-quality forage combined with a concentrate that provides bypass protein can help cows reach their genetic potential.</p>

      <h3>Energy Density</h3>
      <p>Lactating cows have immense energy requirements. If they can't eat enough dry matter to meet these needs, they enter a negative energy balance, leading to weight loss and reduced fertility. Adding fat supplements or high-energy grains can bridge this gap.</p>

      <h3>Water: The Forgotten Nutrient</h3>
      <p>Milk is 87% water. Ensure your herd has unlimited access to clean, fresh water. A drop in water intake will immediately reflect in the milk tank.</p>
    `,
    image: '/images/blog1.jpg',
    date: 'Dec 12, 2025',
    author: 'AgroPro Nutrition Team',
    category: 'Cattle',
    tags: ['Dairy', 'Nutrition', 'Milk Yield']
  },
  {
    id: '2',
    title: 'Winter Care for Poultry Flocks',
    slug: 'winter-care-poultry-flocks',
    excerpt: 'Keep feed conversion and egg quality steady in cold weather.',
    content: `
      <p>Winter brings unique challenges for poultry keepers. As temperatures drop, chickens use more energy just to stay warm, leaving less for egg production. Here is how to manage your flock during the cold months.</p>

      <h3>Increase Caloric Intake</h3>
      <p>Switching to a higher energy feed or supplementing with scratch grains in the evening can provide the extra calories birds need to generate body heat overnight.</p>

      <h3>Ventilation vs. Drafts</h3>
      <p>Moisture is the enemy in winter. A coop that is sealed too tight will trap moisture and ammonia, leading to frostbite and respiratory issues. Ensure you have good ventilation high up in the coop, but block drafts at roost level.</p>

      <h3>Water Management</h3>
      <p>Frozen waterers are a common headache. Heated bases or swapping water out multiple times a day is essential. Dehydration is a major cause of winter production drops.</p>
    `,
    image: '/images/blog2.jpg',
    date: 'Nov 28, 2025',
    author: 'Poultry Health Expert',
    category: 'Poultry',
    tags: ['Winter', 'Poultry Care', 'Egg Production']
  },
  {
    id: '3',
    title: 'Protein Efficiency in Pig Finishing',
    slug: 'protein-efficiency-pig-finishing',
    excerpt: 'Balancing cost and growth rate in the final production phase.',
    content: `
      <p>Feed accounts for up to 70% of production costs in swine farming. The finishing phase is where the most feed is consumed, so efficiency here is key to profitability.</p>

      <h3>Phase Feeding</h3>
      <p>As pigs grow, their protein requirements decrease while their energy intake increases. Implementing a phase feeding program—adjusting the diet every few weeks—prevents wasting expensive protein on older pigs that can't utilize it.</p>

      <h3>Amino Acid Balance</h3>
      <p>Lysine is typically the first limiting amino acid in swine diets. Formulating diets based on digestible lysine rather than just crude protein allows for more precise nutrition and less nitrogen waste.</p>
    `,
    image: '/images/blog3.jpg',
    date: 'Nov 15, 2025',
    author: 'Swine Specialist',
    category: 'Swine',
    tags: ['Pigs', 'Feed Efficiency', 'Cost Management']
  }
];
