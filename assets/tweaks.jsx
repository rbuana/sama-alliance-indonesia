/* SAMA Alliance Indonesia — Tweaks panel */
/* global React, ReactDOM */

const SAMA_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "navy-fire",
  "typePair": "jakarta",
  "showTicker": true
}/*EDITMODE-END*/;

function SamaTweaks() {
  const [t, setTweak] = window.useTweaks(SAMA_TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.dataset.palette = t.palette;
    document.body.dataset.type = t.typePair;
    const ticker = document.querySelector('.tickers');
    if (ticker) ticker.style.display = t.showTicker ? '' : 'none';
  }, [t]);

  const Panel = window.TweaksPanel;
  const Section = window.TweakSection;
  const Select = window.TweakSelect;
  const Radio = window.TweakRadio;
  const Toggle = window.TweakToggle;

  return (
    <Panel title="Tweaks">
      <Section label="Type pairing">
        <Select
          label="Font system"
          value={t.typePair}
          onChange={(v) => setTweak('typePair', v)}
          options={[
            { value: 'jakarta',              label: 'Jakarta — Plus Jakarta Sans (Indonesian)' },
            { value: 'editorial',            label: 'Serif · Newsreader — modern editorial' },
            { value: 'editorial-instrument', label: 'Serif · Instrument — delicate, italic-forward' },
            { value: 'editorial-dm',         label: 'Serif · DM Display — high-contrast didone' },
            { value: 'editorial-spectral',   label: 'Serif · Spectral — refined, contemporary' },
            { value: 'industrial',           label: 'Industrial — Archivo Black + Archivo' },
            { value: 'swiss',                label: 'Swiss — Space Grotesk + IBM Plex Sans' },
            { value: 'brutalist',            label: 'Brutalist — Anton condensed + Work Sans' },
          ]}
        />
      </Section>

      <Section label="Palette">
        <Select
          label="Color direction"
          value={t.palette}
          onChange={(v) => setTweak('palette', v)}
          options={[
            { value: 'navy-fire',   label: 'Navy + Fire (default)' },
            { value: 'cream-red',   label: 'Cream + Crimson' },
            { value: 'ink-cyan',    label: 'Ink + Cyan' },
            { value: 'black-amber', label: 'Black + Amber' },
          ]}
        />
      </Section>

      <Section label="Layout">
        <Toggle
          label="Show agency ticker"
          value={t.showTicker}
          onChange={(v) => setTweak('showTicker', v)}
        />
      </Section>
    </Panel>
  );
}

const tweakRoot = document.createElement('div');
tweakRoot.id = 'sama-tweaks-root';
document.body.appendChild(tweakRoot);
ReactDOM.createRoot(tweakRoot).render(<SamaTweaks />);
