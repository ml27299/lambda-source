const req = require.context('./', true, /\.(js)$/);
const paths = req.keys();

export default paths.reduce((result, path) => Object.assign({}, result, req(path).default ? {
    [`${path.split("/").pop().replace(".js", '')}`]: req(path).default
} : {}), {});