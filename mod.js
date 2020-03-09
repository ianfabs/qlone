const { args, run } = Deno;

console.log(args);

const [slug, dest] = args.filter(f => f.indexOf("-") !== 0);
const flags = args.filter(f => f.indexOf("-") === 0).map(f => f.toLowerCase());

console.log(slug, dest, flags);

const clone = async (slug, dest, flags) => {
  let host = "hub";

  const url = `https://git${host}.com/${slug}`;
  let gitArgs = ["git","clone", url];

  if (dest != undefined && dest != null) gitArgs.push(dest);
  if ( flags.includes('-lab') ) host = "lab";
  if ( flags.includes('-f') ) gitArgs.push("--force");

  let process = run({
    args: dest != undefined ? [ ...gitArgs, dest ] : gitArgs,
  });

  let result = await process.status();

  if (!result.success) throw new Error("Failed to clone");
};

clone(slug, dest, flags);
