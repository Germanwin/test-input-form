<template>
  <div>
    <input type="text" id="elastic">
    <ul>
      <li v-for="name in matchedNames" :key="name">
        <a @click="navigateToProfile(name)">{{ name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      matchedNames: [],
    }
  },
  mounted() {
    let names = ['WarriorAlice', 'ShadowBob', 'MageCharlie', 'KnightDavid', 'ArcherEmma', 'RogueFiona', 'PaladinGeorge', 'AssassinHannah', 'DruidIvan', 'SorceressJulia',
      'HunterKevin', 'PriestessLaura', 'BerserkerMichael', 'ValkyrieNina', 'RangerOliver', 'MonkPamela', 'NecromancerQuincy', 'HealerRachel', 'GladiatorSteve', 'ShamanTina',
      'AlchemistUrsula', 'WarlockVictor', 'SpellbladeWendy', 'WitcherXander', 'BardYara', 'TemplarZachary', 'SamuraiAaron', 'VampireBianca', 'BarbarianCaleb', 'EnchantressDiana',
      'GuardianEthan', 'SeerFreya', 'MarksmanGavin', 'MysticHazel', 'ElementalistIsaac', 'NinjaJade', 'SentinelKyle', 'IllusionistLily', 'ChampionMason', 'WardenNora',
      'BeastmasterOscar', 'OraclePenelope', 'InvokerQuentin', 'EnforcerRiley', 'CrusaderSam', 'WitchTara', 'SageUma', 'BattlemageVince', 'BlademasterWillow', 'PsionXenia',
      'RifterYvonne', 'HarbingerZane', 'SorcererAmber', 'TemplarBrad', 'MysticCindy', 'AssassinDerek', 'RangerEliza', 'BerserkerFrank', 'DruidGloria', 'SpellbladeHarry',
      'HunterIris', 'MageJack', 'PaladinKelly', 'RogueLiam', 'PriestessMegan', 'ValkyrieNate', 'GladiatorOwen', 'HealerPaula', 'WarlockQuinn', 'ShamanReed',
      'WarriorSophia', 'ShadowTom', 'MonkUlysses', 'AlchemistValerie', 'BardWarren', 'WitcherXimena', 'BeastmasterYosef', 'BerserkerZoey', 'KnightAiden', 'ArcherBella',
      'NecromancerCole', 'ElementalistDaisy', 'GuardianEdward', 'MarksmanFaith', 'SeerGreg', 'RifterHailey', 'SentinelIan', 'NinjaJenna', 'BarbarianKurt', 'SorceressLeah',
      'VampireMark', 'EnforcerNolan', 'InvokerOlivia', 'WardenParker', 'CrusaderQueenie', 'PsionRon', 'MysticStella', 'SamuraiTyler', 'OracleUriah', 'HarbingerVivian']

    // Access the input element and attach the 'input' event handler
    document.getElementById('elastic').oninput = (event) => {
      let val = event.target.value.trim().toLowerCase();  // Convert to lowercase for case-insensitive search
      if (val.length < 3) {
        this.matchedNames = [];
      } else {
        this.matchedNames = names.filter(name => name.toLowerCase().includes(val)).slice(0, 10);
      }
      console.log(this.matchedNames);
    }
  },
  methods: {
    navigateToProfile(name) {
      // Здесь можно использовать роутер Vue Router для навигации
      // Например, если у вас есть объект this.$router
      this.$router.push({ name: 'Profile', params: { username: name } });
      
      // Или просто переход по URL
      // window.location.href = `/profiles/${name}`;
    }
  }
}
</script>