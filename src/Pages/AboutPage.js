function AboutPage() {
  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 p-5">
        <h2 className="mb-4 text-primary">
          About Trendy News
        </h2>

        <p className="lead">
          Trendy News is a modern news platform built
          using React and NewsAPI. It provides real-time
          updates on various topics including Politics,
          Sports, Technology, Health, and Entertainment.
        </p>

        <p>
          Users can search for news articles, browse
          different categories, and read complete
          articles through external links. The project
          demonstrates React concepts such as Components,
          Props, State, useEffect, Event Handling, and
          React Router.
        </p>

        <h5 className="mt-4">
          Technologies Used
        </h5>

        <ul>
          <li>React JS</li>
          <li>React Router DOM</li>
          <li>Bootstrap 5</li>
          <li>NewsAPI</li>
          <li>JavaScript (ES6+)</li>
        </ul>

        <h5 className="mt-4">
          Developed By
        </h5>

        <p>
          Developed by Teks Academy students:
          <br />
          Vardhan, Vishal, Valli, and Harisankerthan.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;