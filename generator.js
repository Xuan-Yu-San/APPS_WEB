module.exports = (api, options, rootOptions) => {
  console.log(options, rootOptions);
  api.extendPackage({
    "name": options.project_name
  })

  api.render('./template')
}