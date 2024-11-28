<script>
console.log('Projects data loaded successfully');

const projects = [
  {
    id: 1,
    title: 'Test Project 1',
    description: 'Project with both links',
    techStack: ['Vue.js'],
    demoLink: 'https://demo.com',
    githubLink: 'https://github.com',
  },
  {
    id: 2,
    title: 'Test Project 2',
    description: 'Project with only GitHub',
    techStack: ['Vue.js', 'nuxt3'],
    demoLink: '',
    githubLink: 'https://github.com',
  },
];

export default {
  name: 'Projects',
  setup() {
    return {
      projects,
    };
  },
};

export { projects };
</script>
