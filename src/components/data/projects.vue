<script>
console.log('Projects data loaded successfully');

const projects = [
  {
    id: 1,
    title: 'Portfolio Project',
    description: 'Project with both links',
    techStack: ['Vue.js'],
    demoLink: 'https://www.belljahh.nl/',
    githubLink: 'https://github.com/89137/Portfolio-Vue/tree/main',
  },
  {
    id: 2,
    title: 'Old Portfolio Project',
    description: 'Project with only GitHub',
    techStack: ['Css', 'Js'],
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
