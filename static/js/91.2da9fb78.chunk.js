(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[91],{670:function(e,n){e.exports={title:"1.5.22 Release",description:"Custom Cursor and Item Identification plugins, Falo the Bard clue support",author:"Jordan",body:'<p>A Custom Cursor plugin has been added which, when enabled, allows you to change your cursor when\nhovering the client to one of a number of iconic RuneScape cursors, including the RS3 gold and\nsilver cursors, a trout, and the iconic dragon scimitar. Thanks to\n<a href="https://github.com/Kruithne" native="">@Kruithne</a> and <a href="https://github.com/Trevor159" native="">@Trevor159</a> for making\nthis happen!</p>\n<p><img src="/img/blog/1.5.22-Release/rs3-gold-cursor.png" alt="RS3 gold cursor">\n<img src="/img/blog/1.5.22-Release/dragon-dagger-cursor.png" alt="Dragon dagger cursor"></p>\n<p>Have you ever confused your herbs, seeds, or tree saplings? We\'ve added an Item Identification\nplugin to help combat that. When enabled, it will overlay the name (or abbreviated name) on the\nitem when in most non-bank interfaces. Thanks to <a href="https://github.com/Hydrox6" native="">@Hydrox6</a> for adding\nthis feature.</p>\n<p><img src="/img/blog/1.5.22-Release/item-identification-plugin.png" alt="Item identification plugin overlaying some herbs, saplings, and herb seeds"></p>\n<p>The Clue Scroll plugin has had support added for Falo the Bard clues, thanks to\n<a href="https://github.com/Twiglet1022" native="">@Twiglet1022</a>.</p>\n<p><img src="/img/blog/1.5.22-Release/falo-the-bard-clue-support.png" alt="A clue hint being shown for an opened Falo the Bard clue"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The loot tracker plugin now tracks Herbiboar harvest loot</li>\n<li>When completing beginner-level music clue steps, the Clue Scroll plugin will scroll your music\nlist to the requested song when first opened after reading the clue</li>\n<li>An option has been added to the NPC Indicators plugin to also highlight the right-click menu\noptions of marked NPCs</li>\n<li>The Slayer plugin will now highlight Mutated Zygomites sooner when they are weak and can be\nsprayed</li>\n<li>The Idle Notifier plugin will now alert you should you go idle after crafting pottery</li>\n<li>An icon for the battlefront teleport has been added to the World Map plugin</li>\n<li>The Daily Task plugin now has an option to notify you when Thirus\'s dynamite is available for\npick-up</li>\n<li>The Virtual Levels plugin now has an option to disable showing virtual total level</li>\n<li>Bronze darts are now shown at the proper level in the Skill Calculator plugin</li>\n<li>Fixed a bug which could cause the Ammo plugin\'s infobox to not be removed properly</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 12 contributors this release!</p>\n<pre><code>Adam (5):\n      interface styles: invalidate healthbar cache on shutdown\n      travis: update dist to xenial\n      travis: switch to openjdk8\n      client: add custom cursor plugin\n      world hopper: disable Hop-to pvp worlds from regular worlds\n\nAlexsuperfly (2):\n      slayer: add \'south of\' to task regex\n      slayer: add test including \'south of\'\n\nBeau (1):\n      Optionally prevent virtual levels from effecting total level\n\nCrow (1):\n      Fix bronze dart requirement in skillcalculator (1-&gt;10) (#8690)\n\nHydrox6 (3):\n      clue plugin: add widget scroll feature\n      ammo: fix the infobox not getting removed\n      client: add item identification plugin\n\nTheStonedTurtle (2):\n      chat history: fix pm cycling deque max size\n      chat history: clear friend deque when clearing pm history\n\nTomas Slusny (2):\n      Fix Mutated Zygomite fungicide weaknes threshold\n      Use proxy methods for settings cursor via ClientUI\n\nTwiglet1022 (2):\n      worldmap: add Battlefront teleport\n      clue scroll plugin: add Falo the Bard clues\n\nbeaumitch (1):\n      npcindicators: Add option to highlight NPC name in right click menu (#8673)\n\nlanghillie (1):\n      daily task plugin: add Thirus\'s dynamite\n\nxDemoN (1):\n      idlenotifier: add support pottery crafting (#8674)\n\nzaydsalah (1):\n      Add Herbiboar support to the Loottracker (#8663)\n</code></pre>\n'}}}]);
//# sourceMappingURL=91.2da9fb78.chunk.js.map