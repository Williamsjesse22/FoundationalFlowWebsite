import { dashboardVis, funnelVis, inboxVis, sampleLabel } from "@/content/home";

/** Reporting: weekly numbers and margin by job. */
export function DashboardVis() {
  return (
    <div className="vis" role="img" aria-label={dashboardVis.ariaLabel}>
      <div className="vis-head">
        <span>{dashboardVis.head}</span>
        <span>{sampleLabel}</span>
      </div>
      <div className="vis-body">
        <div className="kpis">
          {dashboardVis.kpis.map((k) => (
            <div className="kpi" key={k.label}>
              <small>{k.label}</small>
              <b>{k.value}</b>
              {k.delta && <i>{k.delta}</i>}
            </div>
          ))}
        </div>
        <div className="bars">
          {dashboardVis.bars.map((bar) => (
            <div key={bar.label}>
              <div className="lbl">
                <span>{bar.label}</span>
                <span>{bar.value}</span>
              </div>
              <div className="track">
                <div className={`fill${bar.low ? " low" : ""}`} style={{ width: `${bar.fill}%` }} />
                <span className="tgt" style={{ left: `${bar.target}%` }} />
              </div>
            </div>
          ))}
          <span className="note">{dashboardVis.note}</span>
        </div>
      </div>
    </div>
  );
}

/** Hiring: applicants narrowed to the few worth interviewing. */
export function FunnelVis() {
  return (
    <div className="vis" role="img" aria-label={funnelVis.ariaLabel}>
      <div className="vis-head">
        <span>{funnelVis.head}</span>
        <span>{sampleLabel}</span>
      </div>
      <div className="vis-body">
        <div className="funnel">
          {funnelVis.rows.map((row) => (
            <div className="frow" key={row.label}>
              <span>{row.label}</span>
              <div className="track">
                <div className={`fill tone-${row.tone}`} style={{ width: `${row.fill}%` }} />
              </div>
              <b>{row.count}</b>
            </div>
          ))}
        </div>
        <div className="cand">
          <small>{funnelVis.topMatch.label}</small>
          <p>{funnelVis.topMatch.body}</p>
        </div>
      </div>
    </div>
  );
}

/** Back office: every email sorted and handled. */
export function InboxVis() {
  return (
    <div className="vis" role="img" aria-label={inboxVis.ariaLabel}>
      <div className="vis-head">
        <span>{inboxVis.head}</span>
        <span>{sampleLabel}</span>
      </div>
      <div>
        {inboxVis.rows.map((row) => (
          <div className="mail" key={row.subject}>
            <b>{row.subject}</b>
            <small>{row.detail}</small>
            <span className={`pill ${row.tone}`}>{row.pill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
