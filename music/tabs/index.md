# Tabs

This section collects playable music tabs and scores rendered from ABC notation using abcjs. You can listen to the score and view notation directly in the page.

- How it works: we use a Vue component `<AbcPlayer>` that renders ABC and provides play controls via WebAudio.
- Add your own: paste ABC text into the component or create new pages under `music/tabs/`.

Start with the demo piece below or jump to the dedicated page:
- Always With Me (demo excerpt): /music/tabs/always-with-me

---

Example (C major scale):

<ClientOnly>
  <AbcPlayer :abc="`X:1\nT:C Major Scale Demo\nM:4/4\nL:1/8\nK:C\nC D E F | G A B c | c B A G | F E D C ||`" />
</ClientOnly>

