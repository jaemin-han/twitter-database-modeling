BEGIN;

INSERT INTO users (user_id, username) VALUES
(1, 'jaemin'),
(2, 'han'),
(3, 'michelle'),
(4, 'coco');

INSERT INTO tweets (content, likes, user_id) VALUES
('What happens after you fail? Hear from startup founders tonight at our #FailForward event: http://jh.co/2ffkllF  @theNYVC', 7, 1),
('Learn how to craft & pitch your #scientificresearch from science, tech & VC professionals - 6pm tomorrow: http://jh.co/2eW1ngR  @authorea', 14, 2),
('Hack with us from 9am-6pm on Saturday at our Amazon Alexa #Hackathon! http://jh.co/2eWba6e  @alexadevs', 20, 3),
('Last week, CEO Jaemin Han answered questions about startups, MBAs & more. Learn what he had to say: http://jh.co/2el9UJI  @Quora', 99, 3),
('Encouraging women to pursue programming careers means creating a more inclusive work culture: http://jh.co/2fnkSyY  #womenintech', 42, 4),
('Happy birthday, Carl Sajhn! Nearly 40 years ago, the late astronomer sent the Voyager Golden Record into space: https://www.instagram.com/p/BMmI8tdBEbi/ ', 0, 2),
('Twitters stock is going up: http://jh.co/2eWba6e @jimmyz', 20, 2),
('Jimmy is getting married soon!: http://jh.co/2eWba6e @jayz16', 40, 3),
('How was your food today? It was okay cause its from deli: http://jh.co/2eWbba @jayz16', 22, 1),
('Jaemin Han party is next week! Who is going? Tell me now!: http://jh.co/2eWbissf  @takatheman', 82, 3);

COMMIT;
