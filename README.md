const portfolioConfig = {
  email: "you@example.com",
  linkedin: "https://www.linkedin.com",
  github: "https://github.com/canlashaze",
  notion: "https://app.notion.com/p/3c84c37d158e80efa12df77172a34bf6?source=copy_link",
  driveFolder: "https://drive.google.com/drive/folders/1IIX0fWnp_haYi8Zt2YVvlj4xpOb6iFr5?usp=sharing",
  resume: "https://drive.google.com/drive/folders/1IIX0fWnp_haYi8Zt2YVvlj4xpOb6iFr5?usp=sharing"
};

const setLinks = () => {
  const emailLink = document.querySelector('a[href="mailto:you@example.com"]');
  if (emailLink) emailLink.href = `mailto:${portfolioConfig.email}`;

  document.querySelectorAll('[data-link="linkedin"]').forEach((el) => {
    el.href = portfolioConfig.linkedin;
  });

  document.querySelectorAll('[data-link="github"]').forEach((el) => {
    el.href = portfolioConfig.github;
  });

  document.querySelectorAll('[data-link="notion"]').forEach((el) => {
    el.href = portfolioConfig.notion;
  });

  document.querySelectorAll('[data-link="drive"]').forEach((el) => {
    el.href = portfolioConfig.driveFolder;
  });

  document.querySelectorAll('[data-link="resume"]').forEach((el) => {
    el.href = portfolioConfig.resume;
  });
};

setLinks();
