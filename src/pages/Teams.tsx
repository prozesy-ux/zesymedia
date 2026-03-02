import React, { useEffect } from "react";

// Teams page component - redirects to standalone teams page
export const Teams = () => {
  useEffect(() => {
    // Redirect to the standalone teams page
    window.location.href = "/teams/single-page.html";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <div className="mb-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
        </div>
        <p className="text-white text-lg">Loading Teams Page...</p>
      </div>
    </div>
  );
};
