<script>
console.log('Projects data loaded successfully');

const projects = [
  {
    id: 1,
    title: 'Portfolio Site',
    description:
      'The second version of my Portfolio site, fully made with vue3 using routes. I am still working on it.',
    techStack: ['Vue.js', 'Routes', 'Typescript'],
    demoLink: 'https://www.belljahh.nl/',
    githubLink: 'https://github.com/89137/Portfolio-Vue/tree/main',
  },
  {
    id: 2,
    title: 'Old Portfolio Site',
    description:
      'My first ever Portfolio site I made at school, using only basic HTML, CSS and JS.',
    techStack: ['Html', 'Css', 'Js'],
    demoLink: 'https://89137-github-io.vercel.app/',
    githubLink: 'https://github.com/89137/89137.github.io',
  },
];

export default {
  setup() {
    return {
      projects,
    };
  },
};

export { projects };
</script>
