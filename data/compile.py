#!/usr/bin/python

import csv
import json

with open("final-list.csv", "rU") as f:
	csv_f = csv.reader(f)

	# next(csv_f, None)

	for row in csv_f:

		json_data = []
		for row in csv_f:

			data = {
				"name": row[0],
				"rankings": [
					{ "year": "2015", "rank_2015": row[1], "rank": row[1], "firm": row[2], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2014", "rank_2015": row[1], "rank": row[3], "firm": row[4], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2013", "rank_2015": row[1], "rank": row[5], "firm": row[6], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2012", "rank_2015": row[1], "rank": row[7], "firm": row[8], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2011", "rank_2015": row[1], "rank": row[9], "firm": row[10], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2009", "rank_2015": row[1], "rank": row[11], "firm": row[12], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2008", "rank_2015": row[1], "rank": row[13], "firm": row[14], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2007", "rank_2015": row[1], "rank": row[15], "firm": row[16], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2006", "rank_2015": row[1], "rank": row[17], "firm": row[18], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] },
					{ "year": "2005", "rank_2015": row[1], "rank": row[19], "firm": row[20], "name": row[0], "url": row[21], "gender": row[22], "notable_deal": row[23], "citizenship": row[24], "chinese_zodiac": row[25], "immigrant": row[26] }
				]
			}

			json_data.append(data)

	print json.dumps(json_data);









