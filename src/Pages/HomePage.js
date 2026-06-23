function HomePage() {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-5 text-center">
        <h1 className="text-primary mb-3">
          Welcome to Trendy News
        </h1>

        <p className="lead">
          Stay informed with the latest breaking news,
          top headlines, and trending stories from
          around the world.
        </p>

        <p>
          Explore news from various categories such as
          Politics, Sports, Technology, Health, and
          Entertainment. Search for any topic and read
          real-time articles powered by NewsAPI.
        </p>

        <h5 className="mt-4">
          What You'll Find Here
        </h5>

        <ul className="list-unstyled mt-3">
          <li>📰 Breaking News Updates</li>
          <li>⚽ Sports Headlines</li>
          <li>💻 Technology News</li>
          <li>🎬 Entertainment Updates</li>
          <li>🏥 Health & Fitness Articles</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;