from flask import Flask, redirect, render_template, flash
from models import db, connect_db, Playlist, Song, PlaylistSong
from forms import NewSongForPlaylistForm, SongForm, PlaylistForm

app = Flask(__name__)

app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:password@127.0.0.1:5432/playlist_app"
app.config[
    "SQLALCHEMY_TRACK_MODIFICATIONS"
] = False 
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "password"
app.config["DEBUG_TB_INTERCEPT_REDIRECTS"] = False

connect_db(app)

@app.route("/")
def root():
    """Homepage: redirect to /playlists."""

    return redirect("/playlists")


##############################################################################
# Playlist routes


@app.route("/playlists")
def show_all_playlists():
    """Return a list of playlists."""

    playlists = Playlist.query.all()
    return render_template("playlists.html", playlists=playlists)


@app.route("/playlists/<int:playlist_id>")
def show_playlist(playlist_id):
    """Show detail on specific playlist."""
    playlist = Playlist.query.get(playlist_id)
    song_list = PlaylistSong.query.all()
    return render_template("playlist.html", playlist=playlist, songs=song_list)


@app.route("/playlists/add", methods=["GET", "POST"])
def add_playlist():
    """Handle add-playlist form:

    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-playlists
    """
    form = PlaylistForm()
    all_playlists = Playlist.query.all()
    if form.validate_on_submit():
        name = form.name.data
        description = form.description.data
        new_playlist = Playlist(name=name, description=description)
        db.session.add(new_playlist)
        db.session.commit()
        flash("Added Playlist!", "success")
        return redirect('/playlists')

    return render_template("new_playlist.html", form=form, songs=all_playlists)


##############################################################################
# Song routes


@app.route("/songs")
def show_all_songs():
    """Show list of songs."""

    songs = Song.query.all()
    return render_template("songs.html", songs=songs)


@app.route("/songs/<int:song_id>")
def show_song(song_id):
    """return a specific song"""

    song = Song.query.get(song_id)

    return render_template("song.html", song=song)


@app.route("/songs/add", methods=["GET", "POST"])
def add_song():
    """Handle add-song form:
    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-songs
    """
    form = SongForm()
    all_songs = Song.query.all()
    if form.validate_on_submit():
        title = form.title.data
        artist = form.artist.data
        new_song = Song(title=title, artist=artist)
        db.session.add(new_song)
        db.session.commit()
        flash("Added Song!", "success")
        return redirect('/songs')

    return render_template("new_song.html", form=form, songs=all_songs)

    # ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK


@app.route("/playlists/<int:playlist_id>/add-song", methods=["GET", "POST"])
def add_song_to_playlist(playlist_id):
    """Add a playlist and redirect to list."""

    playlist = Playlist.query.get_or_404(playlist_id)
    songs = Song.query.all()
    form = NewSongForPlaylistForm()
    song_list=[(s.id, s.title) for s in songs]
    form.song.choices = song_list

    if form.validate_on_submit():
        song = Song.query.get(form.song.data)
        playlist.song.append(song)
        db.session.commit()

        return redirect(f"/playlists/{playlist_id}")

    return render_template("add_song_to_playlist.html", playlist=playlist, form=form)
