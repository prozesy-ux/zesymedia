import React, { useEffect, useState } from "react";

// Teams page component - loads the teams app dynamically
export const Teams = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import and render the teams app
    const loadTeamsApp = async () => {
      try {
        // Load teams app HTML
        const response = await fetch("/teams/index.html");
        const html = await response.text();
        
        // Parse HTML and extract body content
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bodyContent = doc.body.innerHTML;
        
        // Inject into container
        const container = document.getElementById("teams-container");
        if (container) {
          container.innerHTML = bodyContent;
          
          // Load and execute scripts
          const scripts = doc.querySelectorAll("script");
          scripts.forEach((script) => {
            const newScript = document.createElement("script");
            if (script.src) {
              newScript.src = script.src;
            } else {
              newScript.textContent = script.textContent;
            }
            document.body.appendChild(newScript);
          });
        }
        
        setIsLoaded(true);
      } catch (error) {
        console.error("Failed to load teams page:", error);
        setIsLoaded(false);
      }
    };

    loadTeamsApp();
  }, []);

  return (
    <div id="teams-container" className="box-border caret-transparent w-full">
      {!isLoaded && (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-lg text-gray-600">Loading Teams Page...</div>
        </div>
      )}
    </div>
  );
};
