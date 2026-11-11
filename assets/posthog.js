// PostHog on the marketing site: every page view and a recording with inputs masked
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister identify alias set_config reset opt_in_capturing opt_out_capturing get_distinct_id people.set people.set_once getFeatureFlag isFeatureEnabled onFeatureFlags reloadFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
if (!["localhost", "127.0.0.1"].includes(location.hostname)) {
  posthog.init("phc_tXgXDafsf3cB2WmdQYwCnAsrzPpvDbzQYZt5oefmGMPB", { // gitleaks:allow
    api_host: "https://us.i.posthog.com", defaults: "2025-05-24", person_profiles: "always",
    session_recording: { maskAllInputs: true },
  });
}
