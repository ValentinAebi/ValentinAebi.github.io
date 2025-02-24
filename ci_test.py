import time

def test_date():
    with open("./index.html") as f:
        content = f.read()
        prefix = "<p class=\"footer\">Last updated:"
        begin_idx = content.index(prefix) + len(prefix)
        end_idx = content.index("</p>", begin_idx+1)
        date_str = content[begin_idx : end_idx].strip()
        today = time.strftime("%d.%m.%Y")
        assert date_str == today
