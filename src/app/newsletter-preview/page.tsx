export default function NewsletterPreview() {
  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#F4F2ED', fontFamily: 'Georgia, serif' }}>
      <table width="100%" cellPadding={0} cellSpacing={0} style={{ backgroundColor: '#F4F2ED', padding: '40px 20px' }}>
        <tbody>
          <tr>
            <td align="center">
              <table width={600} cellPadding={0} cellSpacing={0} style={{ maxWidth: 600, width: '100%' }}>

                {/* Header */}
                <tbody>
                  <tr>
                    <td style={{ backgroundColor: '#2C3434', padding: '32px 40px', textAlign: 'center' }}>
                      <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
                        Staffing Solutions by Sarah Fell
                      </p>
                      <h1 style={{ margin: '12px 0 0', fontSize: 28, fontWeight: 500, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                        Spring is here —<br />is your team ready?
                      </h1>
                    </td>
                  </tr>

                  {/* Gold divider */}
                  <tr>
                    <td style={{ backgroundColor: '#C6A64A', height: 4, fontSize: 0, lineHeight: 0 }}>&nbsp;</td>
                  </tr>

                  {/* Intro */}
                  <tr>
                    <td style={{ backgroundColor: '#ffffff', padding: '36px 40px' }}>
                      <p style={{ margin: '0 0 16px', fontFamily: 'Arial, sans-serif', fontSize: 15, lineHeight: 1.7, color: '#3a3a3a' }}>
                        Hi [First Name],
                      </p>
                      <p style={{ margin: '0 0 16px', fontFamily: 'Arial, sans-serif', fontSize: 15, lineHeight: 1.7, color: '#3a3a3a' }}>
                        As Easter weekend approaches, many Ontario manufacturers and industrial teams are heading into their busiest stretch of the year — and the hiring pressure that comes with it.
                      </p>
                      <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 15, lineHeight: 1.7, color: '#3a3a3a' }}>
                        Whether you&apos;re managing spring production ramp-ups, backfilling turnover, or planning ahead for summer, now is the right time to get your talent pipeline moving.
                      </p>
                    </td>
                  </tr>

                  {/* Divider */}
                  <tr>
                    <td style={{ backgroundColor: '#ffffff', padding: '0 40px' }}>
                      <hr style={{ border: 'none', borderTop: '1px solid #e8e2d8', margin: 0 }} />
                    </td>
                  </tr>

                  {/* Tips */}
                  <tr>
                    <td style={{ backgroundColor: '#ffffff', padding: '32px 40px' }}>
                      <p style={{ margin: '0 0 20px', fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9A7E2F' }}>
                        Spring Hiring Tips
                      </p>

                      {[
                        {
                          title: 'Start the search before you\'re desperate',
                          body: 'The best skilled trades candidates are off the market within days. Getting ahead of your timeline by even 2–3 weeks makes a measurable difference.',
                        },
                        {
                          title: 'Be specific about your must-haves',
                          body: 'Vague job descriptions attract vague candidates. The clearer you are about certifications, shift requirements, and experience, the faster we can find your fit.',
                        },
                        {
                          title: 'Don\'t lose candidates to slow decision-making',
                          body: 'Spring is competitive. If you like a candidate, moving within 48 hours dramatically increases your close rate. We\'ll keep you informed every step of the way.',
                        },
                      ].map((tip, i) => (
                        <table key={i} width="100%" cellPadding={0} cellSpacing={0} style={{ marginBottom: i < 2 ? 20 : 0 }}>
                          <tbody>
                            <tr>
                              <td width={28} valign="top" style={{ paddingTop: 2 }}>
                                <div style={{ width: 20, height: 20, backgroundColor: '#C6A64A', borderRadius: '50%', textAlign: 'center', lineHeight: '20px', fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, color: '#ffffff' }}>
                                  {i + 1}
                                </div>
                              </td>
                              <td style={{ paddingLeft: 12 }}>
                                <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 600, color: '#2C3434' }}>{tip.title}</p>
                                <p style={{ margin: '6px 0 0', fontFamily: 'Arial, sans-serif', fontSize: 13, lineHeight: 1.6, color: '#666666' }}>{tip.body}</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      ))}
                    </td>
                  </tr>

                  {/* CTA */}
                  <tr>
                    <td style={{ backgroundColor: '#F9F7F2', padding: '32px 40px', textAlign: 'center', borderTop: '1px solid #e8e2d8', borderBottom: '1px solid #e8e2d8' }}>
                      <p style={{ margin: '0 0 8px', fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#9A7E2F' }}>
                        Ready to hire?
                      </p>
                      <p style={{ margin: '0 0 24px', fontFamily: 'Arial, sans-serif', fontSize: 18, fontWeight: 500, color: '#2C3434', letterSpacing: '-0.01em' }}>
                        Let&apos;s build your shortlist before the long weekend.
                      </p>
                      <a
                        href="https://staffingsolutionsbysarahfell.vercel.app/#book"
                        style={{ display: 'inline-block', backgroundColor: '#2C3434', color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 11, fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', textDecoration: 'none', padding: '14px 32px' }}
                      >
                        Book a Strategy Call
                      </a>
                    </td>
                  </tr>

                  {/* Footer */}
                  <tr>
                    <td style={{ backgroundColor: '#2C3434', padding: '28px 40px', textAlign: 'center' }}>
                      <p style={{ margin: '0 0 8px', fontFamily: 'Arial, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
                        © 2025 Staffing Solutions by Sarah Fell, Inc. · Ontario-first, Canada-wide
                      </p>
                      <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 11, color: 'rgba(255,255,255,0.35)' }}>
                        You&apos;re receiving this because you opted in.{' '}
                        <a href="#" style={{ color: '#C6A64A', textDecoration: 'none' }}>Unsubscribe</a>
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
