export const backgroundResizeCallback = (entries) => {
  const backgroundElement = document.getElementById("background-container");
  if (entries[0].isIntersecting && window.pageYOffset < 100) {
    backgroundElement.classList.replace("w-[175%]", "w-full");
    backgroundElement.classList.replace("opacity-40", "opacity-100");
  } else {
    backgroundElement.classList.replace("w-full", "w-[175%]");
    backgroundElement.classList.replace("opacity-100", "opacity-40");
  }

  const introTextElement = document.getElementById("intro-text");
  if (entries[0].isIntersecting && window.pageYOffset < 100) {
    introTextElement.classList.replace("opacity-0", "opacity-100");
    introTextElement.classList.replace("h-0", "h-auto");
    introTextElement.classList.replace("w-0", "w-auto");
    
  } else {
    introTextElement.classList.replace("opacity-100", "opacity-0");
    introTextElement.classList.replace("h-auto", "h-0");
    introTextElement.classList.replace("w-auto", "w-0");
  }

  const imageElement = document.querySelector("#background-container img");
  if (entries[0].isIntersecting && window.pageYOffset < 100) {
    // imageElement.classList.add("md:clip-custom");
    imageElement.classList.replace("md:w-screen", "md:w-[50vw]");
    imageElement.classList.replace("md:h-[70vh]", "md:h-[60vh]");
  } else { 
    // imageElement.classList.remove("md:clip-custom");
    imageElement.classList.replace("md:w-[50vw]", "md:w-screen");
    imageElement.classList.replace("md:h-[60vh]", "md:h-[70vh]");
  }
};

export const applySnap = (query) => {
  const selectorRef = document.querySelector(query);
  selectorRef.classList.add("snap-y");
  selectorRef.classList.add("snap-mandatory");
};

export const removeSnap = (query) => {
  const selectorRef = document.querySelector(query);
  selectorRef.classList.remove("snap-y");
  selectorRef.classList.remove("snap-mandatory");
};
