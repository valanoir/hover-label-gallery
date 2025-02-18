
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
  ];

  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="hover-card group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="hover-label">
              <span className="text-sm text-blue-300">{project.category}</span>
              <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
