// This is a generated file. Do not edit it directly.
// Make your changes to presets/glitch.json then rebuild
// this file with `npm run build-presets -- glitch`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"glitch","name":"Glitch","description":"Extensive glitch knowledge may be required for completion. Guaranteed Heart Refreshes in Entrance and the out of bounds candle. Guaranteed Claymore and Manna Prisms in Caverns.","author":"romscout"},"relicLocationsExtension":false,"startingEquipment":[{"slot":"Right hand","item":"Tyrfing"},{"slot":"Left hand","item":"Leather Shield"},{"slot":"Head","item":"Sunglasses"},{"slot":"Body","item":"Cloth Tunic"},{"slot":"Cloak","item":"Cloth Cape"},{"slot":"Other","item":"Duplicator"},{"slot":"AxeArmor","item":"Gold Plate"},{"slot":"Luck Mode","item":"Talisman"}],"itemLocations":[{"comment":"Heart Refresh in Pot Roast rock","zone":"NO3","item":"Pot Roast","replacement":"Heart Refresh"},{"comment":"2nd Heart Refresh in OOB candle","zone":"RDAI","item":"Heart","index":6,"replacement":"Heart Refresh"},{"comment":"Library candles have Pentagram","zone":"LIB","item":"Uncurse","index":1,"replacement":"Pentagram"},{"comment":"Library candles have Pentagram","zone":"LIB","item":"Uncurse","index":2,"replacement":"Pentagram"},{"comment":"Library Card in Entrance Turkey spot","zone":"NO3","item":"Turkey","replacement":"Library Card"},{"comment":"Toadstool at Entrance Warp switch","zone":"NO3","item":"Heart Vessel","replacement":"Toadstool"},{"comment":"Heart Refresh at Catacombs library card","zone":"CAT","item":"Library Card","replacement":"Heart Refresh"},{"comment":"Axe Lord Armor at Spike Breaker","zone":"CAT","item":"Spike Breaker","replacement":"Axe Lord Armor"},{"comment":"Claymore in vanilla spot","zone":"NO4","item":"Claymore","replacement":"Claymore"},{"comment":"Manna prism at Cavern Onyx","zone":"NO4","item":"Onyx","replacement":"Manna Prism"}],"prologueRewards":[{"item":"Heart Refresh","replacement":"Fire Boomerang"},{"item":"Neutron Bomb","replacement":"Fire Boomerang"},{"item":"Potion","replacement":"Life Apple"}],"lockLocation":[{"comment":"Relic checks requiring 0 relics","location":"Cube of Zoe","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Merman Statue","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Bat Card","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Spirit Orb","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Soul of Wolf","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Leap Stone","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Faerie Scroll","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Faerie Card","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Jewel of Open","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Form of Mist","locks":["Soul of Bat + Gravity Boots + Power of Mist + Form of Mist + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Soul of Wolf + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"comment":"Relic checks requiring 1 relic","location":"Power of Mist","locks":["Soul of Bat + Jewel of Open + Form of Mist + Soul of Wolf + Heart of Vlad","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Soul of Bat + Jewel of Open + Soul of Wolf + Gravity Boots + Heart of Vlad","Soul of Bat + Jewel of Open + Form of Mist + Gravity Boots + Heart of Vlad","Soul of Bat + Jewel of Open + Form of Mist + Power of Mist + Heart of Vlad"]},{"location":"Soul of Bat","locks":["Gravity Boots + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe","Jewel of Open + Form of Mist + Heart of Vlad"]},{"location":"Demon Card","locks":["Form of Mist + Soul of Bat + Heart of Vlad","Soul of Wolf + Soul of Bat + Heart of Vlad","Soul of Bat + Gravity Boots + Power of Mist + Leap Stone + Heart of Vlad + Jewel of Open + Spirit Orb + Power of Wolf + Skill of Wolf + Ghost Card + Demon Card + Force of Echo + Fire of Bat + Faerie Scroll + Gas Cloud + Cube of Zoe"]},{"location":"Holy Symbol","locks":["Merman Statue + Heart of Vlad"]},{"location":"Skill of Wolf","locks":["Form of Mist + Soul of Bat + Jewel of Open + Heart of Vlad","Soul of Wolf + Soul of Bat + Jewel of Open + Heart of Vlad","Gravity Boots + Soul of Bat + Jewel of Open + Heart of Vlad"]},{"location":"Sword Card","locks":["Form of Mist + Soul of Bat + Jewel of Open + Heart of Vlad","Soul of Wolf + Soul of Bat + Jewel of Open + Heart of Vlad","Gravity Boots + Soul of Bat + Jewel of Open + Heart of Vlad"]},{"comment":"First Castle relic checks that reuire 2+ relics","location":"Echo of Bat","locks":["Soul of Wolf + Form of Mist + Heart of Vlad + Jewel of Open","Form of Mist + Power of Mist + Heart of Vlad + Jewel of Open","Gravity Boots + Soul of Wolf + Heart of Vlad + Jewel of Open","Gravity Boots + Form of Mist + Heart of Vlad + Jewel of Open","Gravity Boots + Leap Stone + Cube of Zoe + Heart of Vlad + Jewel of Open"]},{"location":"Fire of Bat","locks":["Soul of Wolf + Form of Mist + Heart of Vlad + Jewel of Open","Form of Mist + Power of Mist + Heart of Vlad + Jewel of Open","Gravity Boots + Soul of Wolf + Heart of Vlad + Jewel of Open","Gravity Boots + Form of Mist + Heart of Vlad + Jewel of Open","Gravity Boots + Leap Stone + Heart of Vlad","Soul of Wolf + Leap Stone + Heart of Vlad + Jewel of Open","Form of Mist + Leap Stone + Heart of Vlad + Jewel of Open"]},{"location":"Ghost Card","locks":["Soul of Wolf + Form of Mist + Heart of Vlad + Jewel of Open","Form of Mist + Power of Mist + Heart of Vlad + Jewel of Open","Gravity Boots + Soul of Wolf + Heart of Vlad + Jewel of Open","Gravity Boots + Form of Mist + Heart of Vlad + Jewel of Open","Gravity Boots + Leap Stone + Heart of Vlad + Jewel of Open"]},{"location":"Power of Wolf","locks":["Soul of Bat + Soul of Wolf + Form of Mist + Heart of Vlad + Jewel of Open","Soul of Bat + Form of Mist + Power of Mist + Heart of Vlad + Jewel of Open","Soul of Bat + Gravity Boots + Soul of Wolf + Heart of Vlad + Jewel of Open","Soul of Bat + Gravity Boots + Form of Mist + Heart of Vlad + Jewel of Open","Soul of Bat + Gravity Boots + Leap Stone + Heart of Vlad + Jewel of Open"]},{"location":"Gravity Boots","locks":["Soul of Bat + Soul of Wolf + Form of Mist + Heart of Vlad + Jewel of Open","Soul of Bat + Form of Mist + Power of Mist + Heart of Vlad + Jewel of Open","Soul of Bat + Gravity Boots + Soul of Wolf + Heart of Vlad + Jewel of Open","Soul of Bat + Gravity Boots + Form of Mist + Heart of Vlad + Jewel of Open","Soul of Bat + Gravity Boots + Leap Stone + Heart of Vlad + Jewel of Open"]},{"comment":"Second Castle relic checks before Caverns","location":"Ring of Vlad","locks":["Soul of Bat + Soul of Wolf + Form of Mist + Heart of Vlad","Soul of Bat + Form of Mist + Power of Mist + Heart of Vlad","Soul of Bat + Gravity Boots + Soul of Wolf + Heart of Vlad","Soul of Bat + Gravity Boots + Form of Mist + Heart of Vlad","Soul of Bat + Gravity Boots + Leap Stone + Heart of Vlad"]},{"location":"Tooth of Vlad","locks":["Soul of Wolf + Form of Mist + Heart of Vlad","Form of Mist + Power of Mist + Heart of Vlad","Gravity Boots + Soul of Wolf + Heart of Vlad","Gravity Boots + Form of Mist + Heart of Vlad","Gravity Boots + Leap Stone + Heart of Vlad"]},{"location":"Heart of Vlad","locks":["Soul of Bat + Soul of Wolf + Form of Mist + Heart of Vlad","Soul of Bat + Form of Mist + Power of Mist + Heart of Vlad","Soul of Bat + Gravity Boots + Soul of Wolf + Heart of Vlad","Soul of Bat + Gravity Boots + Form of Mist + Heart of Vlad","Soul of Bat + Gravity Boots + Leap Stone + Heart of Vlad"]},{"location":"Rib of Vlad","locks":["Soul of Wolf + Form of Mist + Heart of Vlad","Form of Mist + Power of Mist + Heart of Vlad","Gravity Boots + Soul of Wolf + Heart of Vlad","Gravity Boots + Form of Mist + Heart of Vlad","Gravity Boots + Leap Stone + Heart of Vlad"],"comment":"Last 3 relics in Second Castle are unlocked"}]})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
