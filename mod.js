const { args, run } = Deno;

console.log(args);

const [slug, dest] = args.filter(f => f.indexOf("-") !== 0);
const flags = args.filter(f => f.indexOf("-") === 0);

console.log(slug, dest, flags);

const clone = async (slug, dest, flags) => {
  let host;
  if (flags.map(f => f.toLowerCase()).includes('-lab')) {
    host = "lab";
  } else {
    host = "hub"
  }
  const url = `https://git${host}.com/${slug}`;

  let gitProcessArgs = ["git","clone", url];
  let process = run({
    // args: Object.values( { ...gitProcessArgs, ...dest && { dest } } )
    args: dest != undefined ? [ ...gitProcessArgs, dest ] : gitProcessArgs,
  });

  let result = await process.status();

  if (!result.success) throw new Error("Failed to clone");
};

clone(slug, dest, flags);
