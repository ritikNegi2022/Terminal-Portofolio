import { getProjects } from "@/pages/api";

export const projects = async (args) => {
  const projects = await getProjects();

  return projects
    .filter((repo) => !repo.fork)
    .map((repo) => {
      return `${repo.name} - <a class="text-light-blue dark:text-dark-blue underline" href="${repo.html_url}" target="_blank">${repo.html_url}</a>`;
    })
    .join("\n");
};
