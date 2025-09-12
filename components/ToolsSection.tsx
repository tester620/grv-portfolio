
export default function ToolsSection() {
  const tools = [
  { name: "Figma", percentage: 98, color: "bg-pink-500", icon: "🎨" },       
  { name: "Photoshop", percentage: 90, color: "bg-blue-600", icon: "🖌️" },  
  { name: "Notion", percentage: 85, color: "bg-gray-800", icon: "📒" },     
  { name: "HTML", percentage: 92, color: "bg-orange-500", icon: "🌐" },     
  { name: "CSS", percentage: 90, color: "bg-blue-500", icon: "🎨" },        
  { name: "JavaScript", percentage: 95, color: "bg-yellow-400", icon: "⚡" }
];


  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gray-100 rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-gray-600">— My Favorite Tools</span>
          </div>
          <h2 className="text-3xl lg:text-4xl mb-4">
            <span className="text-yellow-400">Exploring the Tools</span><br />
            Behind My Designs
          </h2>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-50 rounded-2xl p-6 mb-4 group-hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{tool.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{tool.percentage}%</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div
                    className={`h-2 rounded-full ${tool.color}`}
                    style={{ width: `${tool.percentage}%` }}
                  ></div>
                </div>
              </div>
              <h3 className="font-medium text-gray-900">{tool.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}