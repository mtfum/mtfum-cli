'use strict'
const { h, Text } = require('ink')
const SelectInput = require('ink-select-input')
const opn = require('opn')

const open = url => opn(url, { wait: false })

const handleSelect = item => {
  if (item.url) {
    open(item.url)
  }

  if (item.action) {
    item.action()
  }
}

const items = [
  {
    label: 'Twitter',
    url: 'https://twitter.com/mtfum',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/mtfum',
  },
  {
    label: 'Qiita',
    url: 'http://qiita.com/mtfum',
  },
	{
		label: 'Instagram',
		url: 'https://instagram.com/mtfum'
	},
	{
		label: 'Facebook',
		url: 'https://facebook.com/fumiya.ymnk'
	},
  {
    label: 'Quit',
    action() {
      process.exit()
    },
  },
]

module.exports = () => (
  <div>
    <br />
    <div>
      <Text>I’m a Freelance Engineer & Remote Worker.</Text>
    </div>
    <br />
    <SelectInput items={items} onSelect={handleSelect} />
  </div>
)
