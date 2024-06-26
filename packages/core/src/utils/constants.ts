const template: string[] = [
  "common-lib",
  "react-ui",
  "react-web-js",
  "react-web-ts",
  "vue-web-js",
  "vue-web-ts",
  "commit",
];

export const packageVersion = "1.0.1";

const getProjectLink = (templates: string[]): Map<string, string> =>
  new Map(
    templates.map((template) => [
      template,
      `https://registry.npmjs.org/@laconic/template-${template}/-/template-${template}-${packageVersion}.tgz`,
    ]),
  );

export const projectLink: Map<string, string> = getProjectLink(template);

function detectOS() {
  const platform = process.platform;
  if (platform === "win32") {
    return "windows";
  } else if (platform === "darwin") {
    return "mac";
  } else if (platform === "linux") {
    return "linux";
  }
  return platform;
}

export const CLIENT_OS = detectOS();
