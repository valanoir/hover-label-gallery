
const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Gift Box Design",
      image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=800&q=80",
      category: "Packaging",
    },
    {
      id: 2,
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
      category: "Branding",
    },
    {
      id: 3,
      title: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      category: "Marketing",
    },
    {
      id: 4,
      title: "Web Design",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80",
      category: "Design",
    },
    {
      id: 5,
      title: "Social Media",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      category: "Marketing",
    },
    {
      id: 6,
      title: "Product Design",
      image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&q=80",
      category: "Design",
    },
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => {
          // Calculate dynamic height classes based on index
          const heightClass = index % 3 === 1 ? "h-[600px]" : "h-[400px]";
          
          return (
            <div 
              key={project.id} 
              className={`hover-card group ${index % 3 === 1 ? 'md:col-span-1' : 'md:col-span-1'}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className={`w-full ${heightClass} object-cover`}
                loading="lazy"
              />
              <div className="hover-label">
                <span className="text-sm text-blue-300">{project.category}</span>
                <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
