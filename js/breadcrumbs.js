document.addEventListener("DOMContentLoaded", function () {
  // Create the breadcrumb container
  const breadcrumbContainer = document.createElement("div");
  breadcrumbContainer.className = "breadcrumbs";

  // Generate the breadcrumb HTML based on the current URL path
  const pathArray = window.location.pathname.split("/").filter(p => p).slice(1);

  let breadcrumbHTML = '<a href="/">Início</a>';
  let path = "";
  pathArray.forEach((part, index) => {
    // Remove dashes, remove numbers, and capitalize text
    const formattedPart = decodeURIComponent(part)
      .replace(/-/g, ' ')
      .replace(/\d+/g, '');
  
    path += `/${part}`;
    if (index === pathArray.length - 1) {
      breadcrumbHTML += ` / <span>${formattedPart}</span>`;
    } else {
      breadcrumbHTML += ` / <a href="${path}/">${formattedPart}</a>`;
    }
  });
  
  breadcrumbContainer.innerHTML = breadcrumbHTML;
  
  // Select the first <h1> element on the page
  const h1Element = document.querySelector('h1');
  if (h1Element) {
    // Insert the breadcrumb container before the <h1> element
    h1Element.insertAdjacentElement('beforebegin', breadcrumbContainer);
  } else {
    console.error('No <h1> element found on the page.');
  }
});
