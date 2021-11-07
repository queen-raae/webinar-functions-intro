import React from "react";

const IndexPage = () => {
  return (
    <main>
      <header>
        <h1>Ruby's Gatsby Timeship</h1>
      </header>

      <p>Let's make a time travel function: </p>
      <ul>
        <li>
          Step 1: <a href="api/time-travel-1">api/time-travel-1</a>
        </li>
        <li>
          Step 2:{" "}
          <a href="api/time-travel-2?city=stavanger&year=2020">
            api/time-travel-2?city=stavanger&year=2020
          </a>
        </li>
        <li>
          Step 3 (find the princess):{" "}
          <a href="api/time-travel-3?city=oslo&year=2026">
            api/time-travel-3?city=oslo&year=2026
          </a>
        </li>
        <li>
          Step 3 (no princess):{" "}
          <a href="api/time-travel-3?city=bergen&year=2026">
            api/time-travel-3?city=bergen&year=2026
          </a>
        </li>
      </ul>
    </main>
  );
};

export default IndexPage;
