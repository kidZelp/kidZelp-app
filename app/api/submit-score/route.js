import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
	const body = (await request.json());

	if (body) {
		try {
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: "kidzelp@notiee-dc9d3.iam.gserviceaccount.com",
					private_key:
						"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCX3+4LpLDzpt5K\n2S8BNUEalzdeeO/2syjpKPTkUoaxbDWqdAUwlCCH2YS/ZhXuG9J7BPD+0fpV5ZcD\nUbgyJfBpGXnIsK8ku/K+RPwUixes29ihvNAuI3WsljXhqK3g8JtcREfim2sBOR1T\nyCXJPsHdDq+Zx4CRfzs2SK282puckRb5hI//uqdVvH/P+IDXYLT9bNvP+Omtbzch\nFwFIMuIcZhQzlMZyZYHXJqUOugrQTcbcOMKtLA/pTgLk9Rx8OtYhVwsSmAhQUEBQ\nVqKQKe+FoczDu1qnNfz90mAHHUVQz7jDji3lePq/1fJEamvytiJTufIvoAiA7uAe\nLlJUfzgTAgMBAAECggEAM1NWG1E5C96k2R60p+/bZKUd7StpzTGW7dUNjevl4Sf0\nqvoylsw4gjCckCJr3uBALZrp5vQHaegBNPn1Cd2QdbRKV+x+BCgQTQT7O+YVxjE1\n8NLid/U722uYIf7jZFVr666XrJlhfDRVGO9W9b/jvFUuOwYVCRa6aAn/zQcD99D7\nVMDWrNHjArEEo9fx1ALCS6kmHNjflS2I5HVZWkWjGiiGxFwok/xGQ9qGFbUZX3LQ\n3c+U0FjaN1uZG0+zNepGGOhTxpPj9mNoPCn+4LidkUp9ebDSN5DzmH2OWyRqNBck\nWA02i1L3uZSLH5uy3WE/XihU9QChLcNAdYw9NbavIQKBgQDNR0qhJ+jyFLaLr4Ra\n74EFQFkpXYOCIRKuwYAFgJzDl2IjnSqVAuQxqJUj2JUCP4pHsk0c1J2STOnIQ4Wd\n1kJkP2di5pbc9QyHuNgYWC16h8sn4iqMoessm3JZVPNuP3dQBKzPRX4Fq51OJ9uS\nOy7KI93ehnwcOFxl8+111ULbTwKBgQC9ZqGNCb7wVbxnAmUClUrUymYczzdyBREN\n4Bh3F1o60UKfe20kKiTFqX8glDHlsso+SiQGA6yPRSBOJ3W1DC15wHsLui3lGZ5y\n6+R/df4Mes827v5J+H6y3rt9vdQm9HrBnhUHmwQHwFlSFwYDo5mw3xdzuGzyuoj5\nNT/EG+EV/QKBgArdpDClmSn/OK5qKvpZRR4PCukqnwRrVb7UVT91UFb2E2bJMfDT\nR1rtjn9oPnLxBBPJd1V4V6Lf2VwVXuQ87CS8Sm+svv2RJwmkGiQnvriGqZVB3ni1\nNWqWC9Z4ra3/RASDStZp2kLYk6oIaBH0egSPI3Zc7gLcZN+sqrwa/r/3AoGAFQ5x\n63In7iQ5++HCRRU/6oRN8en/qgdyK+68CZFpEJzvITfhnGGrEOaVIZQYMAc+gMpR\nUvHZn1v6CXZNmcEu1RhXFaivLYc5nGEpWBpQEicdHmhXkPW1cEFe6s3N5j7L3vaq\nM9xCCHKT+5JfssvfbFCBFPZt9lZSoBIRcsX+sikCgYB4HHmzmz6I8x3oI9bRiIb8\nFNwlHHRGGtlPLXZ2Xs5ELkFwR2Iqfou8uXhgUUKsyoO8UQMo0J7zJHdz+9NkhCvH\n2XPEtf0WVdJoEKVEnM/Arg0dZZ9rLfLp2n1D4t2BraNUuCuVQeP6QVPt3eBXTdzj\nb25PWEg2tysB03BNy9n4Uw==\n-----END PRIVATE KEY-----\n".replace(
							/\\n/g,
							"\n"
						),
				},
				scopes: [
					"https://www.googleapis.com/auth/drive",
					"https://www.googleapis.com/auth/drive.file",
					"https://www.googleapis.com/auth/spreadsheets",
				],
			});

			const sheets = google.sheets({
				auth,
				version: "v4",
			});

			const res = await sheets.spreadsheets.values.append({
				spreadsheetId:
					"1tEOmuG_4cevxSd4m4KxR2gwbZHDysJQVbI13Bbq6cc8",
				range: "A1:D1",
				valueInputOption: "USER_ENTERED",
				requestBody: {
					values: [
						[
							body.name,
							body.helpingAttitude,
							body.sharingAttitude,
							body.cooperation,
							body.helpingAttitude + body.sharingAttitude + body.cooperation,
							new Date.now(),
						],
					],
				},
			});

			return NextResponse.json(res);
		} catch (e) {
			return NextResponse.error();
		}
	}
}
